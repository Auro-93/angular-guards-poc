import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ErrorPageComponent } from "./error-page.component";




@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ErrorPageComponent,
    SharedModule,
  ],
  providers: [],
})
export class ErrorPageModule { }