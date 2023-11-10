import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { FOODS_MOCK } from 'src/app/mocks/food.mock'; 


@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods: Food[] = FOODS_MOCK; // Use the mock data

 
  private getAll(): Food[] {
    return this.foods; // Use the mock data array
  }

  getFoodByPlu(plu: number): Food{
    return this.getAll().find(food => food.plu === plu)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodsByCategory(category: string): Food[] {
    const filteredFoods = this.getAll().filter(food =>
      category === 'all' ? true : food.category?.toLowerCase() === category.toLowerCase()
    );
    
  
    
    return filteredFoods;
  }
  
  

}
