import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BooksPageComponent } from "./books-page.component";




@NgModule({
  declarations: [
    BooksPageComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    BooksPageComponent,
    SharedModule,
  ],
  providers: [],
})
export class BooksPageModule { }