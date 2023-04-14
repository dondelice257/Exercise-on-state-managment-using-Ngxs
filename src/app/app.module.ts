import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UsersService } from './services/users.service';
import { UsersState } from './states/users/users.state';
import { PostState } from './states/posts/posts.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { ClientsState } from './states/clients/clients.state';
import { HomeComponent } from './home/home.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    ClientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([UsersState, PostState, ClientsState]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
