import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. This is often a sign that the backend is not running.
      console.error('An error occurred:', error.error);
      return throwError(() => new Error('Não foi possível conectar ao servidor. A aplicação Java está rodando?'));
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'));
  }

  /**
   * Fetches all comments from the backend.
   */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.backendUrl).pipe(catchError(this.handleError));
  }

  /**
   * Posts a new comment to the backend.
   */
  postComment(comment: NewComment): Observable<Comment> {
    return this.http.post<Comment>(this.backendUrl, comment).pipe(catchError(this.handleError));
  }
}