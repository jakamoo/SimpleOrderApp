import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FoodExtraComponent } from './food-extra.component';
import { Food } from 'src/app/shared/models/Food';
import { FoodExtra } from 'src/app/shared/models/FoodExtra';

export default {
  title: 'FoodExtraComponent',
  component: FoodExtraComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      // Herhangi bir provider veya module ekleme gerekiyorsa buraya ekleyin
    }),
  ],
} as Meta<FoodExtraComponent>;

const Template: Story<FoodExtraComponent> = (args: FoodExtraComponent) => ({
  props: args,
});



export const WithExtrasAdded = Template.bind({});
WithExtrasAdded.args = {
  foodExtra: new FoodExtra({ plu: 1002, name: 'Bacon', price: 1.0, quantity: 1 }),
  food: new Food({ 
    plu: 2002, 
    name: 'Pizza', 
    price: 10.0, 
    category: 'Italian', 
    extras: [new FoodExtra({ plu: 1002, name: 'Bacon', price: 1.0, quantity: 1 })] 
  }),
};



// Daha fazla hikaye, bileşenin farklı senaryolarda nasıl davrandığını göstermek için eklenebilir.
