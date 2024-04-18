import { Component, Input } from '@angular/core';
import { PostInterface, PhotoInterface } from '../../../interfaces/Interfaces';

import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post: PostInterface | undefined;
  photos: PhotoInterface[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    console.debug('CardComponent | post: ', this.post)
    if(this.post){
      this.loadPosts(this.post?.id);
    }
  }

  loadPosts(postId: number) {
    this.photoService.getPostPhoto(postId).subscribe(photoData => {
      this.photos = [photoData]; 
    });
  }

}
