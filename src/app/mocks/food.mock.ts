import { Food } from "../shared/models/Food";

export const FOODS_MOCK: Food[] = [
    // Daily Category Foods
    {
        plu: 1,
        name: 'Quinoa Salad',
        price: 12.99,
        category: 'Daily',
        extras: []
    },
    {
        plu: 2,
        name: 'Grilled Chicken Breast',
        price: 15.99,
        category: 'Daily',
        extras: []
    },
    // Ala Carte Category Foods
    {
        plu: 3,
        name: 'Steak with Vegetables',
        price: 25.99,
        category: 'Ala Carte',
        extras: [
            { plu: 2001, name: 'Blue Cheese Sauce', price: 3.00 },
            { plu: 2002, name: 'Garlic Bread', price: 1.99 },
        ]
    },
    {
        plu: 4,
        name: 'Grilled Salmon',
        price: 22.99,
        category: 'Ala Carte',
        extras: []
    },
    // Dessert Category Foods
    {
        plu: 5,
        name: 'Chocolate Lava Cake',
        price: 6.99,
        category: 'Dessert',
        extras: [
            { plu: 3001, name: 'Vanilla Ice Cream', price: 1.50 },
        ]
    },
    {
        plu: 6,
        name: 'Cheesecake',
        price: 7.99,
        category: 'Dessert',
        extras: []
    },
    // Lunch Category Foods
    {
        plu: 7,
        name: 'Chicken Caesar Wrap',
        price: 9.99,
        category: 'Lunch',
        extras: []
    },
    {
        plu: 8,
        name: 'Veggie Panini',
        price: 8.99,
        category: 'Lunch',
        extras: []
    },
    // Drink Category Foods
    {
        plu: 9,
        name: 'Iced Latte',
        price: 3.99,
        category: 'Drink',
        extras: [
            { plu: 5001, name: 'Extra Shot', price: 1.00 },
        ]
    },
    {
        plu: 10,
        name: 'Fresh Orange Juice',
        price: 4.99,
        category: 'Drink',
        extras: []
    }
];
