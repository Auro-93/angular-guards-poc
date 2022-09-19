import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { OrderPageComponent } from "./order-page.component";





@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    SharedModule,
    
  ],
  exports: [
    OrderPageComponent, SharedModule,
  ],
  providers: [],
})
export class OrderPageModule { }