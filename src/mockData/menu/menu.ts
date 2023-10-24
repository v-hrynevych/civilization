import * as icons from "@mui/icons-material";

export type IconNames = keyof typeof icons;

interface Menu {
    title?: string;
    category: string;
    menu: Array<{ name: string; price: number; icon: IconNames }>;
}

export const coffeeShopMenu: Array<Menu> = [
    {
        title: "Beverages",
        category: "Coffee Specialties",
        menu: [
            { name: "Espresso", price: 2.5, icon: "Coffee" },
            { name: "Cappuccino", price: 3.5, icon: "Coffee" },
            { name: "Latte", price: 3.75, icon: "Coffee" },
            { name: "Mocha", price: 4.0, icon: "Coffee" },
            { name: "Americano", price: 3.0, icon: "Coffee" },
        ],
    },
    {
        title: "",
        category: "Iced Coffee",
        menu: [
            { name: "Iced Coffee", price: 3.25, icon: "Coffee" },
            { name: "Iced Latte", price: 3.75, icon: "Coffee" },
            { name: "Iced Mocha", price: 4.25, icon: "Coffee" },
        ],
    },
    {
        title: "",
        category: "Teas",
        menu: [
            { name: "Hot Tea", price: 2.75, icon: "EmojiFoodBeverage" },
            { name: "Iced Tea", price: 3.0, icon: "EmojiFoodBeverage" },
        ],
    },
    {
        category: "Cold Brew",
        menu: [
            { name: "Classic Cold Brew", price: 3.5, icon: "AcUnit" },
            { name: "Vanilla Cold Brew", price: 4.0, icon: "AcUnit" },
        ],
    },
    {
        category: "Specialty Drinks",
        menu: [
            { name: "Chai Latte", price: 4.25, icon: "LocalDrink" },
            { name: "Matcha Latte", price: 4.5, icon: "LocalDrink" },
            { name: "Turmeric Latte", price: 4.25, icon: "LocalDrink" },
            { name: "Golden Milk", price: 4.0, icon: "LocalDrink" },
        ],
    },
    {
        category: "Smoothies",
        menu: [
            { name: "Berry Blast Smoothie", price: 4.5, icon: "Icecream" },
            { name: "Green Goddess Smoothie", price: 4.5, icon: "Icecream" },
            { name: "Mango Tango Smoothie", price: 4.75, icon: "Icecream" },
        ],
    },
    {
        title: "",
        category: "Sandwiches and Wraps",
        menu: [
            { name: "Croissants", price: 2.5, icon: "BreakfastDining" },
            { name: "Muffins", price: 2.75, icon: "BreakfastDining" },
            { name: "Danishes", price: 3.0, icon: "BreakfastDining" },
            { name: "Scones", price: 3.25, icon: "BreakfastDining" },
        ],
    },
    {
        title: "",
        category: "Sandwiches and Wraps",
        menu: [
            {
                name: "Turkey and Swiss Sandwich",
                price: 5.5,
                icon: "BreakfastDining",
            },
            { name: "Caprese Panini", price: 6.0, icon: "BreakfastDining" },
            { name: "Chicken Caesar Wrap", price: 6.25, icon: "BreakfastDining" },
        ],
    },
    {
        title: "",
        category: "Snacks",
        menu: [
            { name: "Fruit Cup", price: 3.5, icon: "LunchDining" },
            { name: "Yogurt Parfait", price: 4.0, icon: "LunchDining" },
            { name: "Chips and Salsa", price: 3.25, icon: "LunchDining" },
        ],
    },
    {
        title: "",
        category: "Desserts",
        menu: [
            { name: "Brownies", price: 2.75, icon: "Cookie" },
            { name: "Cookies", price: 2.5, icon: "Cookie" },
            { name: "Cheesecake", price: 4.5, icon: "Cookie" },
        ],
    },
    {
        title: "Kids Menu",
        category: "Kids Menu",
        menu: [
            { name: "Hot Chocolate", price: 3.0, icon: "EscalatorWarning" },
            {
                name: "Peanut Butter & Jelly Sandwich",
                price: 3.5,
                icon: "EscalatorWarning",
            },
        ],
    },
];
