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

  getAllPosts(): Observable<PostI[]>{
    return this.http.get<PostI[]>(this.urlApi);
  }

  addNewPost(post: PostI):Observable<PostI>{
    return this.http.post<PostI>(this.urlApi, post);
  }

  updatePost(post: PostI):Observable<PostI>{
    return this.http.put<PostI>(`${this.urlApi}/${post.id}`, post);
  }

  deletePost(id: string):Observable<{}>{
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
