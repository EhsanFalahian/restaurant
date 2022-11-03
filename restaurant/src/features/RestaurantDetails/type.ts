import {ImageSourcePropType} from 'react-native';

export type AboutType = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  description: string;
};
export type MenuItemType = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  price: number;
  description: string;
};

export type Abb = {
  name: string;
  price: string;
  image_url: string;
  rating: number;
  review: number;
  categories: [
    {
      alias: string;
      title: string;
    },
  ];
};
