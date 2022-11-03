import {Restaurant, RestaurantServer} from '@Home/type';
import {ApiResponse, get} from '../../../core/helpers/axios';
import axios from 'axios';
import {YELP_API_KEY} from '../../../core/config/YelpApi';

// export function getRastaurants(): Promise<Restaurants[]> {
//   return get<ApiResponse<Restaurants[]>>(
//     'serach?term=restaurants&location=Sandeigo',
//   ).then(res => res.data.data);
// }
const config = {
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
};
// Promise<Restaurants[]>
export function getRestaurants(): Promise<RestaurantServer> {
  return get<RestaurantServer>(
    'businesses/search?term=restaurants&location=SanDeigo',
    config,
  ).then(res => res.data);
}

//   axios
//     .get(
//       'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDeigo',
//       config,
//     )
//     .then(res => res.data);
// // }
// get<ApiResponse<Restaurants[]>>(
//     'businesses/search?term=restaurants&location=SanDeigo',
//     config,
// ).then(res => res.data);
// AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4FPV4
