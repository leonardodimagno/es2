import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recuperaPost } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  posts!: Post[];

  constructor() {
    recuperaPost().then((posts) =>{
      this.posts = posts;
    })
  }

  ngOnInit(): void {
  }

}
