import { TestBed } from '@angular/core/testing';

import { FoodBasketService } from './food-basket.service';

describe('FoodBasketService', () => {
  let service: FoodBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
