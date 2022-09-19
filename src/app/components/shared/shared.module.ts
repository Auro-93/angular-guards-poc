import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { BookComponent } from "./book/book.component";
import { FooterComponent } from "./footer/footer.component";
import { GenreCardComponent } from "./genre/genre-card.component";
import { GridComponent } from "./grid/grid.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterNavigationLoaderComponent } from "./router-navigation-loader/router-navigation-loader.component";
import { SkeletonLoaderComponent } from "./skeleton-loader/skeleton-loader.component";


import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SkeletonModule} from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {DockModule} from 'primeng/dock';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';


import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from "@angular/common";
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { RecommendedBooksComponent } from './recommended-books/recommended-books.component';



const components = [
  AlertComponent,
  BookComponent,
  FooterComponent,
  GenreCardComponent,
  GridComponent,
  NavbarComponent,
  RouterNavigationLoaderComponent,
  SkeletonLoaderComponent,
  OrderListItemComponent,
  RecommendedBooksComponent
]

const modules = [
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  ConfirmDialogModule,
  TabMenuModule,
  ButtonModule,
  CardModule,
  SkeletonModule,
  TagModule,
  MessageModule,
  MessagesModule,
  InputTextModule,
  ToastModule,
  DockModule,
  DialogModule,
  CommonModule,
  MenuModule,
  FieldsetModule,
  AvatarModule
]






@NgModule({
  declarations: [
  ...components,
  ],
  imports: [
    ...modules,

    
  ],
  exports: [
    ...modules,
    ...components
  ],
  providers: [ConfirmationService, MessageService],
})
export class SharedModule { }