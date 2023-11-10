import { Component, EventEmitter, Output } from '@angular/core';
import { CATEGORIES_MOCK } from 'src/app/mocks/category.mock';
@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.css']
})
export class FoodFilterComponent {
  @Output() selectedCategory = new EventEmitter<string>();
  categories = CATEGORIES_MOCK; // Ekleme yapın

  updateCategory(newCategory: string) {
    this.selectedCategory.emit(newCategory);
  }
}
