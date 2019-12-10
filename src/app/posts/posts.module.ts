import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsComponent,
    HttpClient,
  ],
  exports: [
    PostsComponent
  ]
})

export class PostsModule{ }
