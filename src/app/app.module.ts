import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrderPageModule } from './components/order-page/order-page.module';
import { BookGenrePageModule } from './components/book-genre-page/book-genre-page.module';
import { BooksPageModule } from './components/books-page/books-page.module';
import { HomePageModule } from './components/home-page/home-page.module';
import { ErrorPageModule } from './components/error-page/error-page.module';
import { FavouritesPageModule } from './components/favourites-page/favourites-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecommendedPageModule } from './components/recommended-page/recommended-page.module';
import { BuyAgainPageModule } from './components/buy-again-page/buy-again-page.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OrderPageModule,
    BookGenrePageModule,
    BooksPageModule,
    HomePageModule,
    ErrorPageModule,
    RecommendedPageModule,
    BuyAgainPageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
