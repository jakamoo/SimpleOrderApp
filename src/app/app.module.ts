import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FoodBasketService} from './services/food-basket/food-basket.service';
import { FoodExtraComponent } from './components/food-extra/food-extra.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodFilterComponent } from './components/food-filter/food-filter.component'
import { FormsModule } from '@angular/forms';
import { FoodComponent } from './components/food/food.component';
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    OrderSummaryComponent,
    FoodExtraComponent,
    FoodListComponent,
    FoodFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule

  ],
  providers: [FoodBasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
