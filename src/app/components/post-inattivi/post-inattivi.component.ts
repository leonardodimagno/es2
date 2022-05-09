import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recuperaPost } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
  posts!: Post[];

  constructor() {
    recuperaPost().then((posts) =>{
      this.posts = posts;
    })
  }

  ngOnInit(): void {
  }

}

