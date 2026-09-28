import {Heart, Moon, ShoppingBasket, ShoppingCart} from "lucide-react";


export interface ButtonProps {
	id: string;
	link: string;
	nameButton: string;
}
export const buttonsCategory: ButtonProps[] = [
	{
		id: "1",
		link: '/category',
		nameButton: 'Категории'
	},
	{
		id: "2",
		link: '/products',
		nameButton: 'Электроника'
	},
	{
		id: "3",
		link: '/category',
		nameButton: 'Мода'
	},
	{
		id: "4",
		link: '/category',
		nameButton: 'Дом'
	},
	{
		id: "5",
		link: '/category',
		nameButton: 'Спорт'
	}
]
export const buttonsHeader = [
	{
		id: "1",
		link: '/favorite',
		icon: Heart
	},
	{
		id: "2",
		link: '/cart',
		icon: ShoppingBasket
	},
	{
		id: "3",
		link: '/dark',
		icon: Moon
	}
];
export const buttonRecommendation = [
	{
		id: "1",
		nameButton: 'Ноутбук для программирования'
	},
	{
		id: "2",
		nameButton: 'Наушники для путешествий'
	},
	{
		id: "3",
		nameButton: 'Кроссовки до 5000 рублей'
	},
	{
		id: "4",
		nameButton: 'Подарок фотографу'
	}
];
export const categoryBlocks = [
	{
		id: "1",
		imageUrl: '/categories/categoryElectronics.png',
		name: 'Электроника',
		counts: 1248,
	},
	{
		id: "2",
		imageUrl: '/categories/categoryFashion.png',
		name: 'Мода',
		counts: 2543,
	},
	{
		id: "3",
		imageUrl: '/categories/categoryHome.png',
		name: 'Дом',
		counts: 1816,
	},
	{
		id: "4",
		imageUrl: '/categories/categoryBeauty.png',
		name: 'Красота',
		counts: 960,
	},
	{
		id: "5",
		imageUrl: '/categories/categorySport.png',
		name: 'Спорт',
		counts: 1335,
	},
	{
		id: "6",
		imageUrl: '/categories/categoryGaming.png',
		name: 'Мода',
		counts: 726,
	},
	{
		id: "7",
		imageUrl: '/categories/categoryBooks.png',
		name: 'Книги',
		counts: 1156,
	},
	{
		id: "8",
		imageUrl: '/categories/categoryAccessories.png',
		name: 'Аксессуары',
		counts: 1880,
	},
]