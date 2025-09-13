import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface to define the comment structure
interface Comment {
  name: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.html',
  styleUrls: ['./comentarios.scss']
})
export class Comentarios implements OnInit {

  comments: Comment[] = [];
  newCommentName: string = '';
  newCommentText: string = '';

  constructor() { }

  ngOnInit(): void {
    // Loads existing comments (example data).
    this.loadComments();
  }

  loadComments(): void {
    // --- BACKEND INTEGRATION POINT (GET) ---
    // In a real scenario, you would make an HTTP GET call to your Java API here.
    // Ex: this.http.get<Comment[]>('/api/comments').subscribe(data => this.comments = data);
    this.comments = [
      { name: 'Example User', text: 'This is a test comment to demonstrate the scrollbar.', timestamp: new Date(Date.now() - 1000 * 60 * 10) },
      { name: 'Anna', text: 'Great post! Very informative.', timestamp: new Date(Date.now() - 1000 * 60 * 9) },
      { name: 'Charles', text: 'I really like the design of this section.', timestamp: new Date(Date.now() - 1000 * 60 * 8) },
      { name: 'Mary', text: 'This is another comment.', timestamp: new Date(Date.now() - 1000 * 60 * 7) },
      { name: 'John', text: 'Just testing the scroll functionality.', timestamp: new Date(Date.now() - 1000 * 60 * 6) },
      { name: 'Sophia', text: 'This is the sixth example comment.', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
      { name: 'Peter', text: 'Awesome work!', timestamp: new Date(Date.now() - 1000 * 60 * 4) },
      { name: 'Louise', text: 'The scrollbar should be visible now.', timestamp: new Date(Date.now() - 1000 * 60 * 2) }
    ];
  }

  submitComment(): void {
    if (this.newCommentName.trim() && this.newCommentText.trim()) {
      const newComment: Comment = {
        name: this.newCommentName,
        text: this.newCommentText,
        timestamp: new Date()
      };

      // --- BACKEND INTEGRATION POINT (POST) ---
      // In a real scenario, you would make an HTTP POST call to your Java API here.
      // Ex: this.http.post('/api/comments', newComment).subscribe(() => { this.comments.push(newComment); });
      this.comments.push(newComment);

      // Clears the text fields after sending.
      this.newCommentName = '';
      this.newCommentText = '';
    }
  }
}
