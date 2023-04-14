import { Component } from '@angular/core';
import { User } from '../model';
import { Store } from '@ngxs/store';
import { Observable, pipe, tap } from 'rxjs';
import { UsersState } from '../states/users/users.state';
import { GetUsers, Incrememt, GetClients, Decrememt } from '../states/users/users.action';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'state';
  list: any[] = [];
  count$: Observable<any> | undefined;
number = 5
  clients$: Observable<any> | undefined;
  clients:any=[]
  constructor(private store: Store) {


  }

  increment(){

    this.store.dispatch(new Incrememt())


  }
  decrement(){

    this.store.dispatch(new Decrememt())


  }

  users$: Observable<any[]> = this.store.select(UsersState.selectUsers);

users:any=[]
count:any=null



  ngOnInit(): void {

    this.count$ = this.store.select(state => state.user.count);
    this.clients$=this.store.select(state=>state.client.clients)
    this.count$.subscribe(data=>{
      this.count=data
    })

this.updateData()
this.users$.subscribe(datas=>{
  this.users=datas.slice(0, this.count)


if(this.users.length===0){
  this.store.dispatch(new GetUsers());

}


  if(this.count<1){
    this.count=0
  }


})

    };

    updateData(){

}
}
