import { FoodExtra } from "./FoodExtra";

export class Food{
    plu!:number;
    name!:string;
    price!:number;
    extras: FoodExtra[] = [];
    category!: string;
    quantity?: number;

    constructor(data?: any) {
        this.plu = data?.plu;
        this.name = data?.name;
        this.price = data?.price;
        this.category = data?.category;
        if (Array.isArray(data?.extras)) {
            this.extras = data.extras.map((e: any) => new FoodExtra(e));
          } else {
            this.extras = [];
          }
      }

}
