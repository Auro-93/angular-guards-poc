import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BuyAgainPageComponent } from "./buy-again-page.component";





@NgModule({
  declarations: [
    BuyAgainPageComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    BuyAgainPageComponent,
    SharedModule,
  ],
  providers: [],
})
export class BuyAgainPageModule { }