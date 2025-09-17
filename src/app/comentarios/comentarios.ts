import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class Comentarios implements OnInit, OnDestroy {
  @ViewChild('commentListContainer') private commentListContainer!: ElementRef;

  comments: Comment[] = [];
  newCommentName: string = '';
  newCommentText: string = '';
  isLoading = false;
  isSubmitting = false;
  error: string | null = null;
  submissionError: string | null = null;
  autoRefreshInterval: number = 0; // 0 = off
  private refreshTimer: any;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  ngOnDestroy(): void {
    this.clearRefreshTimer();
  }

  loadComments(isAutoRefresh = false): void {
    if (!isAutoRefresh) {
      this.isLoading = true;
    }
    this.error = null;
    // Avoid spamming the console on auto-refresh
    if (!isAutoRefresh) {
      console.log('Tentando carregar comentários via serviço...');
    }
    this.comentarioService.getComments().subscribe({
      next: (data) => {
        if (!isAutoRefresh) {
          console.log('Comentários carregados com sucesso:', data);
        }
        const newComments = data.slice().reverse(); // Create a new reversed array
        // Only update if the data is different to prevent unnecessary re-renders and scroll jumps
        if (JSON.stringify(this.comments) !== JSON.stringify(newComments)) {
          this.comments = newComments;
        }
        if (!isAutoRefresh) {
          this.isLoading = false;
        }
      },
      error: (err: Error) => {
        if (!isAutoRefresh) {
          console.error('Falha ao carregar os comentários:', err.message);
          this.error = err.message;
          this.isLoading = false;
        }
        // For auto-refresh, we can fail silently or show a subtle indicator
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

      console.log('Enviando comentário para o backend:', newComment);

      this.comentarioService.postComment(newComment).subscribe({
        next: (savedComment) => {
          console.log('Comentário recebido do backend após o POST:', savedComment);
          this.comments.unshift(savedComment); // Adiciona o novo comentário no início da lista
          // Clears the text fields after sending.
          this.newCommentName = '';
          this.newCommentText = '';
          this.isSubmitting = false;
          this.scrollToTop(); // Rola para o topo da lista
          // Reset the timer to avoid an immediate refresh just after posting
          this.onIntervalChange(this.autoRefreshInterval);
        },
        error: (err: Error) => {
          console.error('Falha ao enviar comentário:', err.message);
          this.submissionError = err.message;
          this.isSubmitting = false;
        }
      });
    }
  }

  onIntervalChange(interval: number): void {
    this.autoRefreshInterval = Number(interval);
    this.clearRefreshTimer();
    if (this.autoRefreshInterval > 0) {
      this.refreshTimer = setInterval(() => {
        this.loadComments(true);
      }, this.autoRefreshInterval);
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

  private clearRefreshTimer(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }
}
