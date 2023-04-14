import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { Post } from 'src/app/model';
import { GetPosts } from './posts.action';
import { PostService } from 'src/app/services/post.service';



export interface PostStateModel {
  posts: Post[];
}

@State<any>({
  name: 'posts',
  defaults: {
    posts: [],
    num:0
  },
})
@Injectable()
export class PostState {
  constructor(private service: PostService) {}

  @Selector()
  static selectPosts(state: PostStateModel): Post[] {
    return state.posts;
  }

  @Action(GetPosts)
  getUsers(ctx: StateContext<PostStateModel>, action: GetPosts) {
    return this.service.fetchPosts().pipe(
      tap((posts: Post[]) => {
        ctx.patchState({
          posts: posts,
        });
      }),

    );
  };

}

