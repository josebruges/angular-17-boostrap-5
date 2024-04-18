import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../../../interfaces/Interfaces';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = environment.API_ROOT;
  constructor(private http: HttpClient) { }

  getPostPhoto(postId: number): Observable<any> {
    const photoUrl = `${this.apiUrl}/photos/${postId}`;
    return this.http.get<any>(photoUrl);
  }
}
