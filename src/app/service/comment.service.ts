import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const COMMENT_API = 'http//:localhost:8080/api/image/'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addToCommentToProject(projectId: number, message: string): Observable<any> {
    return this.http.post(COMMENT_API + projectId + '/create', {
      message: message
    });
  }

  getCommentToProject(projectId: number): Observable<any> {
    return this.http.get(COMMENT_API + projectId + '/all');
  }

  delete(commentId: number): Observable<any> {
    return this.http.post(COMMENT_API + commentId + '/delete', null);
  }
}
