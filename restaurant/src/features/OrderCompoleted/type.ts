import {ImageSourcePropType} from 'react-native';

export type OrderItemType = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  price: number;
  description: string;
};
