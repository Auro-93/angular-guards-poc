import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecommendedPageComponent } from './recommended-page.component';

@NgModule({
  declarations: [RecommendedPageComponent],
  imports: [SharedModule],
  exports: [RecommendedPageComponent, SharedModule],
  providers: [],
})
export class RecommendedPageModule {}
