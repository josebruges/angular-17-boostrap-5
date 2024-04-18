import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    NavbarComponent,
    CardComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
