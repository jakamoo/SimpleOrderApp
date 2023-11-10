import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Food } from 'src/app/shared/models/Food'; 
import { FOODS_MOCK } from 'src/app/mocks/food.mock';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  @Input() category?: string;
  @Input()foods: Food[] = FOODS_MOCK;
  filteredFoods: Food[] = [];
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      this.applyFilter();
    }
  }
  ngOnInit() {
    this.category='all'
    this.applyFilter(); 
  }

  applyFilter() {
    console.log('Category:', this.category);
    if (this.category?.toLocaleLowerCase() === 'all') {
      this.filteredFoods = this.foods;
    } else {
      this.filteredFoods = this.foods.filter(food => food.category.toLowerCase() === this.category?.toLowerCase());
    }
  }
  
  
}
