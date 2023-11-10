export class FoodExtra{
    plu!:number;
    name!:string;
    price!:number;
    quantity?:number; 

    constructor(data?: any) {
        this.plu = data?.plu;
        this.name = data?.name;
        this.price = data?.price;
        this.quantity = data?.quantity; 
      }
}
