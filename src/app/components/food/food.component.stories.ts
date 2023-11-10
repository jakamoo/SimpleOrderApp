import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FoodComponent } from './food.component';
import { FoodBasketService } from 'src/app/services/food-basket/food-basket.service';
import { Food } from 'src/app/shared/models/Food';

// Mock FoodBasketService
class MockFoodBasketService {
  addToBasket(food: Food) {
    // Mock implementation
  }
  removeFromBasket(plu: number) {
    // Mock implementation
  }
}

export default {
  title: 'FoodComponent',
  component: FoodComponent,
  decorators: [
    moduleMetadata({
      providers: [{ provide: FoodBasketService, useClass: MockFoodBasketService }],
      // Herhangi bir Angular modülüne ihtiyaç duyuyorsanız buraya ekleyin
    }),
  ],
} as Meta<FoodComponent>;

const Template: Story<FoodComponent> = (args: FoodComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  food: {
    plu: 123,
    name: 'Margherita Pizza',
    price: 10.0,
    category: 'Italian',
    quantity: 1,
    extras:[]
    // Burada gerekirse ekstra özellikler ekleyebilirsiniz
  }
};

// Daha fazla hikaye, bileşenin farklı senaryolarda nasıl davrandığını göstermek için eklenebilir.
