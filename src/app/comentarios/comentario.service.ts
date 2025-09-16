import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the data structure for a comment
export interface Comment {
  id?: number;
  author: string;
  content: string;
  timestamp?: Date;
}

// Define the structure for creating a new comment
export type NewComment = Omit<Comment, 'id' | 'timestamp'>;

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private backendUrl = 'http://localhost:8081/api/comments';

  constructor(private http: HttpClient) { }

  /**
   * Fetches all comments from the backend.
   */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.backendUrl);
  }

  /**
   * Posts a new comment to the backend.
   */
  postComment(comment: NewComment): Observable<Comment> {
    return this.http.post<Comment>(this.backendUrl, comment);
  }
}