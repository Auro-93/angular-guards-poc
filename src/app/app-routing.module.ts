import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BookGenrePageComponent } from './components/book-genre-page/book-genre-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { BookGenresResolver } from './services/guards/book-genres.resolver';
import { FavouritesResolver } from './services/guards/favourites.resolver';
import { CanActivateGuard } from './services/guards/can-activate-guard.guard';
import { CanDeactivateGuard } from './services/guards/can-deactivate.guard';
import { BuyAgainPageComponent } from './components/buy-again-page/buy-again-page.component';
import { RecommendedPageComponent } from './components/recommended-page/recommended-page.component';
import { CanActivateChildGuard } from './services/guards/can-activate-child-guard.guard';
import { CanLoadGuard } from './services/guards/can-load-guard.guard';

const routes: Routes = [
  
    { path: '', pathMatch: 'full',  component: HomePageComponent },
    { path: 'home',  redirectTo: '' },
    { path: 'books', component: BooksPageComponent, canActivateChild: [CanActivateChildGuard], children: [
      {path: 'buy-again', component: BuyAgainPageComponent},
      {path: 'recommended', component: RecommendedPageComponent},

    ]},
    { path: 'books/:bookGenre', component: BookGenrePageComponent, resolve: {genreBooks: BookGenresResolver}},
    { path: 'favourites', loadChildren: () => import('./components/favourites-page/favourites-page.module').then(m => m.FavouritesPageModule), canLoad: [CanLoadGuard], canActivate: [CanActivateGuard], resolve: {favourites: FavouritesResolver} },
    { path: 'order', component: OrderPageComponent, canDeactivate: [CanDeactivateGuard] },
    { path: '404', component: ErrorPageComponent},
    { path: '**', redirectTo: '404' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
