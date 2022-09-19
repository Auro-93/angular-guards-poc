import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page.component";





@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
   HomePageComponent,
   SharedModule
  ],
  providers: [],
})
export class HomePageModule { }