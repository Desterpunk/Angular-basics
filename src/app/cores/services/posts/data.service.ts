import { PostI } from '../../models/post/post.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'http://localhost:3001/posts'

  constructor(
    private http: HttpClient
  ) { }

  getAllCities(): Observable<PostI[]>{
    return this.http.get<PostI[]>(this.urlApi);
  }
}
