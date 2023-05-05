import { Component, signal } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private router : Router){}

try(){
}

hello= signal('hello');
changed:any;
ngOnInit(){
console.log(this.hello);


}

}
