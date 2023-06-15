import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Viajes a Cataratas del Niagara ', content: 'a', image:'assets/img1.jpg' },
    { id: 2, title: 'Viajes a Macchu Picchu - Peru', content: 'b', image:'assets/img2.jpg' },
    { id: 3, title: 'Viajes a Chichen Itza -ultimos!', content: 'c', image:'assets/img3.jpg'},
  ];

  constructor(private router: Router) {}

  showPostDetails(postId: number) {
    this.router.navigate(['/post-details', postId]);
  }
}


