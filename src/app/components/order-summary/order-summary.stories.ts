import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { OrderSummaryComponent } from './order-summary.component';
import { FoodBasketService } from '../../services/food-basket/food-basket.service';
import { of } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';

// Mock Food verilerini tanımlayın
const mockFoods: Food[] = [
  {
    plu: 1,
    name: 'Margherita Pizza',
    price: 10.0,
    category: 'Italian',
    quantity: 2,
    extras: [
      { plu: 101, name: 'Extra Cheese', price: 2.0, quantity: 1 },
      { plu: 102, name: 'Garlic Sauce', price: 1.0, quantity: 1 }
    ]
  },
  {
    plu: 2,
    name: 'Vegan Burger',
    price: 8.0,
    category: 'Fast Food',
    quantity: 1,
    extras: [
      { plu: 103, name: 'Fries', price: 3.0, quantity: 1 },
      { plu: 104, name: 'Coke', price: 1.5, quantity: 1 }
    ]
  }
];

export default {
  title: 'OrderSummaryComponent',
  component: OrderSummaryComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FoodBasketService,
          useValue: {
            foodsInBasket$: of(mockFoods),
            clearBasket: () => {}
          }
        }
      ],
      // Diğer gerekli Angular modülleri veya bileşenler varsa buraya ekleyin
    }),
  ],
} as Meta<OrderSummaryComponent>;

const Template: Story<OrderSummaryComponent> = (args) => ({
  props: args,
});

export const Ordered = Template.bind({});
Ordered.args = {
  // Burada ekstra argümanlara ihtiyaç duymayabilirsiniz, çünkü veriler mock servisten geliyor
};

// Daha fazla hikaye, bileşenin farklı senaryolarda nasıl davrandığını göstermek için eklenebilir.
