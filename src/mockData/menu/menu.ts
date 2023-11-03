import * as icons from "@mui/icons-material";

export type IconNames = keyof typeof icons;

interface Menu {
    category: string;
    icon: IconNames;
    menu: Array<{ name: string; price: number }>;
}

export const coffeeShopMenu: Array<Menu> = [
    {
        category: "Coffee Specialties",
        icon: "LocalCafe",
        menu: [
            { name: "Espresso", price: 2.5 },
            { name: "Cappuccino", price: 3.5 },
            { name: "Latte", price: 3.75 },
            { name: "Mocha", price: 4.0 },
            { name: "Americano", price: 3.0 },
        ],
    },
    {
        category: "Iced Coffee",
        icon: "Coffee",
        menu: [
            { name: "Iced Coffee", price: 3.25 },
            { name: "Iced Latte", price: 3.75 },
            { name: "Iced Mocha", price: 4.25 },
        ],
    },
    {
        category: "Teas",
        icon: "EmojiFoodBeverage",
        menu: [
            { name: "Hot Tea", price: 2.75 },
            { name: "Iced Tea", price: 3.0 },
        ],
    },
    {
        category: "Cold Brew",
        icon: "AcUnit",
        menu: [
            { name: "Classic Cold Brew", price: 3.5 },
            { name: "Vanilla Cold Brew", price: 4.0 },
        ],
    },
    {
        category: "Specialty Drinks",
        icon: "LocalDrink",
        menu: [
            { name: "Chai Latte", price: 4.25 },
            { name: "Matcha Latte", price: 4.5 },
            { name: "Turmeric Latte", price: 4.25 },
            { name: "Golden Milk", price: 4.0 },
        ],
    },
    {
        category: "Smoothies",
        icon: "Icecream",
        menu: [
            { name: "Berry Blast Smoothie", price: 4.5 },
            { name: "Green Goddess Smoothie", price: 4.5 },
            { name: "Mango Tango Smoothie", price: 4.75 },
        ],
    },
    {
        category: "Sandwiches and Wraps",
        icon: "BreakfastDining",
        menu: [
            { name: "Croissants", price: 2.5 },
            { name: "Muffins", price: 2.75 },
            { name: "Danishes", price: 3.0 },
            { name: "Scones", price: 3.25 },
        ],
    },
    {
        category: "Sandwiches and Wraps",
        icon: "BreakfastDining",
        menu: [
            {
                name: "Turkey and Swiss Sandwich",
                price: 5.5,
            },
            { name: "Caprese Panini", price: 6.0 },
            {
                name: "Chicken Caesar Wrap",
                price: 6.25,
            },
        ],
    },
    {
        category: "Snacks",
        icon: "LunchDining",
        menu: [
            { name: "Fruit Cup", price: 3.5 },
            { name: "Yogurt Parfait", price: 4.0 },
            { name: "Chips and Salsa", price: 3.25 },
        ],
    },
    {
        category: "Desserts",
        icon: "Cookie",
        menu: [
            { name: "Brownies", price: 2.75 },
            { name: "Cookies", price: 2.5 },
            { name: "Cheesecake", price: 4.5 },
        ],
    },
    {
        category: "Kids Menu",
        icon: "EscalatorWarning",
        menu: [
            { name: "Hot Chocolate", price: 3.0 },
            {
                name: "Peanut Butter & Jelly Sandwich",
                price: 3.5,
            },
        ],
    },
];
