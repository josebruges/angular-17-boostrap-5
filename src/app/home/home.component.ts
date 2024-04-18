import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../../interfaces/Interfaces';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchTitle: string = '';
  posts: PostInterface[] = [];
  postsStatic: PostInterface[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  filterPostsByTitle(title: string) {
    this.postService.getPostsByTitle(title).subscribe(posts => {
      this.posts = posts;
      this.postsStatic = posts;
    });
  }

  onInputChange(title: string) {
    if (title.trim() === '') {
      this.loadPosts();
    }
  }
}