import {ImageSourcePropType} from 'react-native';

export type HeaderBtn = {
  id: number;
  title: string;
  type: string;
};

export type Category = {
  id: number;
  image: ImageSourcePropType;
  title: string;
};

export type RestaurantServer = {
  businesses: Restaurant[];
};
export type Restaurant = {
  id: string;
  name: string;
  price: string;
  image_url: string;
  rating: number;
  review_count: number;
  categories: [
    {
      alias: string;
      title: string;
    },
  ];
  transactions: string[];
};
