import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioService, Comment, NewComment } from './comentario.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './comentarios.html',
  styleUrls: ['./comentarios.scss']
})
export class Comentarios implements OnInit {
  @ViewChild('commentListContainer') private commentListContainer: ElementRef;

  comments: Comment[] = [];
  newCommentName: string = '';
  newCommentText: string = '';
  isLoading = false;
  isSubmitting = false;
  error: string | null = null;
  submissionError: string | null = null;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.isLoading = true;
    this.error = null;
    console.log('Tentando carregar comentários via serviço...');
    this.comentarioService.getComments().subscribe({
      next: (data) => {
        console.log('Comentários carregados com sucesso:', data);
        this.comments = data.reverse(); // Exibe os mais recentes primeiro
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Falha ao carregar os comentários. Erro:', err);
        this.error = 'Could not load comments. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  submitComment(): void {
    if (this.newCommentName.trim() && this.newCommentText.trim()) {
      this.isSubmitting = true;
      this.submissionError = null; // Reset error on new submission
      const newComment: NewComment = {
        author: this.newCommentName,
        content: this.newCommentText
      };

      this.comentarioService.postComment(newComment).subscribe({
        next: (savedComment) => {
          this.comments.unshift(savedComment); // Adiciona o novo comentário no início da lista
          // Clears the text fields after sending.
          this.newCommentName = '';
          this.newCommentText = '';
          this.isSubmitting = false;
          this.scrollToTop(); // Rola para o topo da lista
        },
        error: (err) => {
          console.error('Failed to submit comment', err);
          this.submissionError = 'Failed to submit comment. Please check the console for details and try again.';
          this.isSubmitting = false;
        }
      });
    }
  }

  private scrollToTop(): void {
    // Usa um timeout para garantir que a view foi atualizada antes de rolar
    setTimeout(() => {
      try {
        this.commentListContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        console.error('Could not scroll to top', err);
      }
    }, 0);
  }
}
