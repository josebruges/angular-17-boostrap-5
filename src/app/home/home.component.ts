import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../services/api/api.service';
import { ArticlesInterface } from '../../interfaces/Interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    navText: [ '<', '>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.5
      },
      576: {
        items: 2
      },
      768: {
        items: 2.5
      },
      940: {
        items: 3.5
      },
      1200: {
        items: 4.5
      }
    },
    nav: true
  }
  articles: ArticlesInterface[] = [];
  articlesSubscription: Subscription | undefined;

  constructor(
    private apiService: ApiService,
  ){}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articlesSubscription = this.apiService.getArticles()
    .subscribe(
      (articles: ArticlesInterface[]) => {
        this.articles = articles;
        console.debug('this.articles: ', this.articles)
      },
      (error) => {
        console.error('Error al obtener los artículos:', error);
        // Manejar el error apropiadamente
      }
    );
  }
  ngOnDestroy(): void {
    // Cancelar la suscripción para evitar fugas de memoria
    if(this.articlesSubscription){
      this.articlesSubscription.unsubscribe();
    }
  }
}
