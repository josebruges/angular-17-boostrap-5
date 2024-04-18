import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component'
import { CardComponent } from './components/card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';

import { PostService } from './services/post/post.service'
import { PhotoService } from './services/photo/photo.service'

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'loading...' }),

  ],
  providers: [
    PostService,
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
