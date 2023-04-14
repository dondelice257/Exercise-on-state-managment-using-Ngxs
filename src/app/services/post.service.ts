import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
greet ='Hell'
fetchPosts(): Observable<Post[]> {
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
}

}
