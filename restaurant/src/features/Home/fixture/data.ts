import {AboutType, Category, HeaderBtn, Restaurant} from '@Home/type';

export const buttons: HeaderBtn[] = [
  {
    id: 1,
    title: 'home:delivery',
    type: 'Delivery',
  },
  {
    id: 2,
    title: 'home:pickUp',
    type: 'Pickup',
  },
];

export const CategoryData: Category[] = [
  {
    id: 1,
    image: require('app/assets/images/shopping-bag.png'),
    title: 'home:pickup',
  },
  {
    id: 2,
    image: require('app/assets/images/soft-drink.png'),
    title: 'home:softDrinks',
  },
  {
    id: 3,
    image: require('app/assets/images/bread.png'),
    title: 'home:bakeryItems',
  },
  {
    id: 4,
    image: require('app/assets/images/fast-food.png'),
    title: 'home:fastFoods',
  },
];

export const LocalRestaurants: Restaurant[] = [
  {
    id: '1',
    image_url: require('app/assets/images/Food.png'),
    name: 'FIG Restaurant',
    rating: 4.5,
    transactions: [],
  },
  {
    id: '2',
    image_url: require('app/assets/images/Food.png'),
    name: 'Hindi Restaurant',
    rating: 4.5,
    transactions: [],
  },
  {
    id: '3',
    image_url: require('app/assets/images/Food.png'),
    name: 'FIG Restaurant',
    rating: 4.5,
    transactions: [],
  },
  {
    id: '4',
    image_url: require('app/assets/images/Food.png'),
    name: 'Hindi Restaurant',
    rating: 4.5,
    transactions: [],
  },
];

export const AboutData: AboutType[] = [
  {
    id: 1,
    image: require('app/assets/images/bg1.jpg'),
    name: 'FIG Restaurant',
    description: 'Thai . Comfort Food . $$ . 4 . (1069+)',
  },
  {
    id: 1,
    image: require('app/assets/images/bg1.jpg'),
    name: 'FIG Restaurant',
    description: 'Thai . Comfort Food . $$ . 4 . (1069+)',
  },
];
