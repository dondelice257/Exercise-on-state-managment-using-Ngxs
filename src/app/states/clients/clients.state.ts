import { Injectable } from '@angular/core';
import { Action, Selector, State, Store, StateContext } from '@ngxs/store';
import { catchError, tap, withLatestFrom } from 'rxjs/operators';
import { GetClients } from './clients.actions';





@State<any>({
  name: 'client',
  defaults: {

    clients:[
      {name : 'Bukuru', surname : 'callixte', age : 25},
      {name : 'Karire', surname : 'Ella', age : 15},
      {name : 'Mugabo', surname : 'Yannick', age : 31},

    ]
  },
})
@Injectable()
export class ClientsState {
  constructor( public store : Store) {}

  @Action(GetClients)
  getClients(ctx:StateContext<any>){
    const state = ctx.getState();

  ctx.patchState({
  clients : state.clients
  })
  }




}


