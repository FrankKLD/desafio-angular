import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/shared/service/post.service';
import { DialogElementsDialogComponent } from './dialog-elements-dialog/dialog-elements-dialog.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  listPosts: post[] | undefined;
  constructor(public postService: PostService, public dialog: MatDialog) {}

  openDialog(id: number | undefined) {
    const dialogRef = this.dialog.open(DialogElementsDialogComponent, {
      width: '450px',
      data: { userId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Closed');
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.listPosts = data;
    });
  }
}
