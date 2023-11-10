import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemExtraComponent } from './food-extra.component';

describe('FoodItemExtraComponent', () => {
  let component: FoodItemExtraComponent;
  let fixture: ComponentFixture<FoodItemExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodItemExtraComponent]
    });
    fixture = TestBed.createComponent(FoodItemExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
