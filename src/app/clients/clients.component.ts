import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetClients } from '../states/clients/clients.actions';
import { ClientsState } from '../states/clients/clients.state';
import { Observable } from 'rxjs';
import { Post } from '../model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor (private store: Store){}
  clients:any=[]


  clients$ = this.store.select(state => state.client.clients)


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.clients$.subscribe((datas:any)=>{
    this.clients=datas
      console.log(datas)
    })
  }


  name =null
  surname =null
  age=null
  invalid=''
  isInvalid=false

  cname={name :this.name};
  addToList(){
      if(this.name && this.surname && this.age){
       this.clients.push({name :this.name, surname : this.surname, age : this.age})
       this.name=null
       this.surname=null
       this.age=null

      }
      else{
        this.isInvalid=true
      }

    this.store.dispatch(new GetClients())

  }



}
