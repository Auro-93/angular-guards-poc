import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FavouritesPageRoutingModule } from "./favourites-page-routing.module";
import { FavouritesPageComponent } from "./favourites-page.component";




@NgModule({
  declarations: [
    FavouritesPageComponent
  ],
  imports: [
    SharedModule,
    FavouritesPageRoutingModule
    
  ],
  exports: [
    SharedModule
  ],
  providers: [],
})
export class FavouritesPageModule { }