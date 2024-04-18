import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostInterface } from '../../../interfaces/Interfaces';
import { environment } from '../../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.API_ROOT;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.apiUrl}/posts`);
  }

  getPostsByTitle(title: string): Observable<PostInterface[]> {
    const params = new HttpParams().set('title', title);
    return this.http.get<PostInterface[]>(`${this.apiUrl}/posts`, { params });
  }
}
