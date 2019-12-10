import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = []
  title = ""
  description = ""


  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  createPost() {
    this.postsService.createPost(this.title, this.description)
    .subscribe((el) => {
    })
  }

  getPostsByUserID() {
    this.postsService.getPostsByUserID()
    .subscribe((el) => {
      let stringify = JSON.stringify(el)
      let parse = JSON.parse(stringify)
      this.posts = []
      parse.forEach(post => {
        console.log(post)
        this.posts.push(post)
      });
    })
  }

  delete(id) {
    console.log("delete ", id)
    this.postsService.deletePostByID(id).subscribe((el) => {
      this.getPostsByUserID()
    })
  }
}
