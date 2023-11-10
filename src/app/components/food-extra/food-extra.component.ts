import { Component, Input } from '@angular/core';
import { FoodExtra } from 'src/app/shared/models/FoodExtra';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-food-extra',
  templateUrl: './food-extra.component.html',
  styleUrls: ['./food-extra.component.css']
})
export class FoodExtraComponent {

  @Input() foodExtra!: FoodExtra;
  @Input() food!: Food;
  
  add() {
    if (this.food) {
      
      const extra = this.food.extras.find(e => e.plu === this.foodExtra.plu);
  
      if (extra) {
        
        extra.quantity = (extra.quantity || 0) + 1;
      } else {
        
        this.foodExtra.quantity = 1; 
     
      }
    } else {
      console.error('Cannot add to extra because food is undefined');
    }
  }
  
 

  remove() {
    if (this.food && this.food.extras) {
      
      const extra = this.food.extras.find(e => e.plu === this.foodExtra.plu);
  
      if (extra) {
        
        if (extra.quantity && extra.quantity >= 1) {
          extra.quantity -= 1;
        } 
      }
    } else {
      console.error('Cannot remove extra because food or food.extras is undefined');
    }
  }
  
  
}
