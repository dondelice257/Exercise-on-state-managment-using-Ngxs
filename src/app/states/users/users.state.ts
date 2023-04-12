import { Injectable } from '@angular/core';
import { Action, Selector, State, Store, StateContext } from '@ngxs/store';
import { catchError, tap, withLatestFrom } from 'rxjs/operators';
import { UsersService } from '../../users/users.service';
import { Decrememt, GetClients, GetUsers, Incrememt } from './users.action';
import { User } from 'src/app/model';



// export interface UserStateModel {
//   users: User[];
//   count :number,
//   clients:any[]
// }

@State<any>({
  name: 'user',
  defaults: {
    users: [],
    count : 3,
    clients:[
      {name : 'Bukuru', surname : 'callixte', age : 25},
      {name : 'Karire', surname : 'Ella', age : 15},
      {name : 'Mugabo', surname : 'Yannick', age : 31},

    ]
  },
})
@Injectable()
export class UsersState {
  constructor(private service: UsersService, public store : Store) {}

  @Selector()
  static selectUsers(state: any): any[] {
    return state.users;
  }

  @Action(GetClients)
  getClients(ctx:StateContext<any>){
    const state = ctx.getState();

  ctx.patchState({
  clients : state.clients
  })
  }

  @Action(Incrememt)
  increment(ctx: StateContext<any>) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count+1
    });
  }
  @Action(Decrememt)
  decrement(ctx: StateContext<any>) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count-1
    });
  }
  @Action(GetUsers)
  getUsers(ctx: StateContext<any>) {
    return this.service.fetchUsers().pipe(
      tap((users: User[]) => {
        ctx.patchState({
          users: users,
        });
      }),
      catchError((error) => {
        console.error('Error fetching users', error);
        return [];
      })
    );
  }
}

