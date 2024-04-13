// Importa los módulos necesarios desde Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';

// Importa el componente que quieres incluir en este módulo
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from '../components/footer/footer.component';


// Define el módulo usando el decorador NgModule
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NavbarComponent,
    CardComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
