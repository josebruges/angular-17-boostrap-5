import { Component, Input } from '@angular/core';
import { ArticlesInterface } from '../../../interfaces/Interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() article: ArticlesInterface | undefined;

  constructor(){}

}
