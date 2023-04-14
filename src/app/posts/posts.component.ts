import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostState } from '../states/posts/posts.state';
import { Post } from '../model';
import { GetPosts } from '../states/posts/posts.action';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title = 'state';
  list: any = '';
  count$: Observable<any> | undefined;

  constructor(private store: Store, private service:PostService) {}

  posts$: Observable<Post[]> = this.store.select(PostState.selectPosts);

  ngOnInit(): void {
    this.count$ = this.store.select(state => state.user);

this.posts$.subscribe(data=>{
  this.list=data

  if(this.list.length===0){
  this.store.dispatch(new GetPosts());

  }
})



    };




}
