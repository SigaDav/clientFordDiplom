import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const IMAGE_API = 'http//:localhost:8080/api/image/'

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }

  uploadImageToUser(file: File): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('file', file);

    return this.http.post(IMAGE_API + 'upload', uploadData);
  }

  uploadImageToProject(file: File, projectId: number): Observable<any>{
    const uploadData = new FormData();

    return this.http.post(IMAGE_API + projectId + '/upload', uploadData);
  }

  getProfileImage(): Observable<any> {
    return this.http.get(IMAGE_API + 'profileImage');
  }

  getImageToProject(projectId: number): Observable<any> {
    return this.http.get(IMAGE_API + projectId + '/image');
  }


}
