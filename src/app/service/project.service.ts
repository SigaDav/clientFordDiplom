import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/Project";

const PROJECT_API = 'http//:localhost:8080/api/project/'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createProject(project: Project): Observable<any> {
    return this.http.post(PROJECT_API + 'create', project);
  }

  getAllProject(): Observable<any> {
    return this.http.get(PROJECT_API + 'all');
  }

  getProjectForCurrentUser(): Observable<any> {
    return this.http.get(PROJECT_API + 'user/projects')
  }

  delete(id: number): Observable<any> {
    return this.http.post(PROJECT_API + id + 'delete', null);
  }

  donateProject(id: number, username: string): Observable<any> {
    return this.http.post(PROJECT_API + id + '/' + username + '/donate', null);
  }
}
