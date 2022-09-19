import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookGenrePageComponent } from './book-genre-page.component';


@NgModule({
  declarations: [BookGenrePageComponent],
  imports: [SharedModule],
  exports: [BookGenrePageComponent, SharedModule],
  providers: [],
})
export class BookGenrePageModule {}
