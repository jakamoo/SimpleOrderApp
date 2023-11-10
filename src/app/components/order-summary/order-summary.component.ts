import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FoodBasketService } from '../../services/food-basket/food-basket.service';
import { Food } from 'src/app/shared/models/Food';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit{
  foods: Food[] = [];
  private basketSubscription?: Subscription;

  constructor(private foodBasketService: FoodBasketService) {}

  ngOnInit() {
    // Servisten gelen sepet verisini dinleyin
    this.basketSubscription = this.foodBasketService.foodsInBasket$.subscribe(
      (foodsInBasket: Food[]) => {
        this.foods = foodsInBasket;
      }
    );
  }

  ngOnDestroy() {
    this.basketSubscription?.unsubscribe();
  }



  
  getTotalPrice(food: Food): number {
    let total = food.price * (food.quantity ?? 0); // Eğer quantity null veya undefined ise varsayılan olarak 1 al.
  
    food.extras.forEach(extra => {
      total += extra.price * (extra.quantity ?? 0); // Eğer extra.quantity null veya undefined ise varsayılan olarak 1 al.
    });
  
    return total;
  }
  

  getGrandTotal(): number {
    return this.foods.reduce((total, food) => total + this.getTotalPrice(food), 0);
  }

  cancelOrder() {
    this.foodBasketService.clearBasket(); // Sepeti servis kullanarak boşalt
    // Burada kullanıcıya bir bildirim gösterilebilir.
  }
}
