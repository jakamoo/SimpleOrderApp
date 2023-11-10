import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodBasketService } from 'src/app/services/food-basket/food-basket.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  
  @Input() food!: Food;
  currentFood?:Food;


  constructor(private foodBasketService: FoodBasketService) {

  }
  ngOnInit(): void {
    this.currentFood = new Food(this.food);
  }

  add() {
    if (this.currentFood) {
      this.foodBasketService.addToBasket(this.currentFood);
    }else{
      console.log("Error: when add , food is empty")
    }
    this.currentFood = new Food(this.food);
 
  }

  remove() {
    if (this.currentFood) {
      this.foodBasketService.removeFromBasket(this.currentFood.plu);
    }
    else{
      console.log("Error: when  , food is empty")
    }

  }
}
