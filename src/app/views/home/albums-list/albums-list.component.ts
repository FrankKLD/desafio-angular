import { Component, OnInit } from '@angular/core';
import { album } from 'src/app/shared/model/album.model';
import { AlbumService } from 'src/app/shared/service/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  listPosts: album[] | undefined;
  constructor(public albumService: AlbumService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.albumService.getAlbums().subscribe((data) => {
      this.listPosts = data;
    });
  }
}
