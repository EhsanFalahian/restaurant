import {createSlice} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';

// interface CartState {
//   item: [
//     {
//       // id: number;
//       // image: ImageSourcePropType;
//       name: string;
//       price: number;
//       // description: string;
//     },
//   ];
//   restaurantName: string;
// }

const initialState = {
  item: [
    // {
    //   name: '',
    //   price: undefined,
    // },
  ],
  restaurantName: '',
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(state);
      // console.log(action.payload);
      if (action.payload.checkboxValue) {
        state.item = [...state.item, action.payload.item];
        state.restaurantName = action.payload.name;
        console.log(state.restaurantName);
        console.log(action);
      } else {
        state.item = [
          ...state.item.filter(item => item.name !== action.payload.item.name),
        ];
        console.log(state);
      }
    },
  },
});
export const {addToCart} = counterSlice.actions;
export default counterSlice.reducer;
