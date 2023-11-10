import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodExtra } from 'src/app/shared/models/FoodExtra';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FoodBasketService {
 
  
  private foodsInBasketSubject = new BehaviorSubject<Food[]>([]);
  foodsInBasket$ = this.foodsInBasketSubject.asObservable();

  constructor() { }

  removeFromBasket(plu: number): void {
  const currentFoods = this.foodsInBasketSubject.value;
  const updatedFoods = currentFoods.reduce((acc, food) => {
    // Check if this is the food to update
    if (food.plu === plu) {
      // Use nullish coalescing to default to 0 if quantity is null/undefined
      const currentQuantity = food.quantity ?? 0;
      // If the food has a quantity greater than 1, decrement it
      if (currentQuantity > 1) {
        acc.push({ ...food, quantity: currentQuantity - 1 });
      } // If quantity is 1 or less, do not add it back (effectively removing it)
    } else {
      // If not the food to update, just add it back to the accumulator
      acc.push(food);
    }
    return acc;
  }, [] as Food[]); // Start the accumulator as an array of Food
  
  // Publish the updated basket
  this.foodsInBasketSubject.next(updatedFoods);
}

  
  

addToBasket(newFood: Food): void {
  const currentFoods = this.foodsInBasketSubject.value;
  
  // Önce PLU'ya göre bulmaya çalış
  let existingFoodIndex = currentFoods.findIndex(food => food.plu === newFood.plu && this.isEqual(food.extras, newFood.extras));
  if (existingFoodIndex !== -1) {
    // Eğer aynı PLU ve aynı extralar varsa, miktarını arttır
    console.log("equal")
    console.log(newFood.extras)
    const existingQuantity = currentFoods[existingFoodIndex].quantity ?? 0;
    currentFoods[existingFoodIndex].quantity = existingQuantity + 1;
  } else {
    // Yeni yemek, miktarı 1 olarak ayarla ve sepete ekle
    newFood.quantity = 1;
    currentFoods.push(newFood);
  }
  
  this.foodsInBasketSubject.next([...currentFoods]);
}

// ...

// isEqual fonksiyonunuzu lodash'den almak yerine kendiniz yazmak isterseniz:
 isEqual(array1: any[], array2: any[]): boolean {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].quantity!==array2[i].quantity) return false;
  }
  return true;
}
  
  

  getFoodsInBasket(){
    console.log(this.foodsInBasket$);
    return this.foodsInBasket$;
  }

  clearBasket(): void {
    this.foodsInBasketSubject.next([]); // Sepeti boşalt
  }
}  
