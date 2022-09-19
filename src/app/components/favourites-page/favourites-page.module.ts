import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FavouritesPageComponent } from "./favourites-page.component";




@NgModule({
  declarations: [
    FavouritesPageComponent
  ],
  imports: [
    SharedModule
    
  ],
  exports: [
    FavouritesPageComponent, SharedModule
  ],
  providers: [],
})
export class FavouritesPageModule { }