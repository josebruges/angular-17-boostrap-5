import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ArticlesInterface } from '../../../interfaces/articles.interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.API_ROOT;
  articles: ArticlesInterface[] = [
    {
      id: 1,
      name: "The Hidden Wonders of the Amazon Rainforest",
      description: "Explore the fascinating biodiversity and ecological importance of the Amazon Rainforest.",
      img: "/assets/pictures/movie-1.jpeg",
      date: new Date(),
    },
    {
      id: 2,
      name: "Unveiling the Mysteries of Deep-Sea Creatures",
      description: "Dive into the mysterious world of deep-sea creatures and their unique adaptations to extreme environments.",
      img: "/assets/pictures/movie-2.jpeg",
      date: new Date(),
    },
    {
      id: 3,
      name: "Journey to Ancient Mayan Ruins",
      description: "Discover the history and architecture of ancient Mayan ruins hidden deep in the jungles of Central America.",
      img: "/assets/pictures/movie-3.jpeg",
      date: new Date(),
    },
    {
      id: 4,
      name: "The Secrets of Antarctica: Life in the Frozen Continent",
      description: "Learn about the incredible wildlife and scientific research conducted in Antarctica.",
      img: "/assets/pictures/movie-4.jpeg",
      date: new Date(),
    },
    {
      id: 5,
      name: "Exploring the Mariana Trench: The Deepest Part of the Ocean",
      description: "Delve into the depths of the Mariana Trench, the deepest oceanic trench on Earth, and its unique ecosystems.",
      img: "/assets/pictures/movie-5.jpeg",
      date: new Date(),
    },
    {
      id: 6,
      name: "Wildlife Conservation Efforts in Africa",
      description: "Witness the conservation efforts to protect endangered species and preserve natural habitats in Africa.",
      img: "/assets/pictures/movie-6.jpeg",
      date: new Date(),
    },
    {
      id: 7,
      name: "Adventures in the Galápagos Islands",
      description: "Experience the unique biodiversity and evolutionary history of the Galápagos Islands.",
      img: "/assets/pictures/movie-7.jpeg",
      date: new Date(),
    },
    {
      id: 8,
      name: "The Search for Lost Cities in the Himalayas",
      description: "Join the expedition to uncover lost civilizations hidden in the remote Himalayan mountains.",
      img: "/assets/pictures/movie-8.jpeg",
      date: new Date(),
    },
    {
      id: 9,
      name: "Tracking Polar Bears in the Arctic Circle",
      description: "Follow researchers as they study polar bear populations and their adaptation to climate change in the Arctic.",
      img: "/assets/pictures/movie-9.jpeg",
      date: new Date(),
    },
    {
      id: 10,
      name: "Diving into the Great Barrier Reef",
      description: "Explore the vibrant marine life and coral ecosystems of the Great Barrier Reef in Australia.",
      img: "/assets/pictures/movie-10.jpeg",
      date: new Date(),
    }
  ]
  

  constructor() { }

   
  getArticles(): Observable<ArticlesInterface[]> {
    return of(this.articles);
  }
}
