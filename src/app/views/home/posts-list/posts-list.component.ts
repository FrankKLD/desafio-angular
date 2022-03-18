import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  listPosts: post[] | undefined;
  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.listPosts = data;
    });
  }
}
