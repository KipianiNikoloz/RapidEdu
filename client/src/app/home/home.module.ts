import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import {CoreModule} from "../core/core.module";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {SharedModule} from "../shared/shared.module";
import { IntroductionComponent } from './introduction/introduction.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroductionComponent,
    CardsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
