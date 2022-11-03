import React, {useCallback} from 'react';
import {MenuItemType} from '../type';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {Image, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import palette from '../../../core/styles/palette';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../core/store/CounterSlice';

type Props = {
  item: MenuItemType;
  name: string;
};

const MenuItem: React.FC<Props> = props => {
  const {item, name} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.item);
  const isFoodInCart = useCallback((food, cart) => {
    return Boolean(cart.find(item => item.name == food.name));
  }, []);

  return (
    <>
      <Container
        px={2}
        py={2}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        pl={3}>
        <BouncyCheckbox
          innerIconStyle={{borderRadius: 0, borderColor: palette.border}}
          iconStyle={{borderRadius: 0}}
          fillColor={palette.success}
          isChecked={isFoodInCart(item, cartItems)}
          onPress={checkboxValue =>
            dispatch(addToCart({item, checkboxValue, name}))
          }
        />
        <Container width={'60%'}>
          <Text fontWeight={'bold'} pb={2}>
            {item?.name}
          </Text>
          <Text pb={2}>{item?.description}</Text>
          <Text>${item?.price}</Text>
        </Container>
        <Container width={'25%'}>
          <Image
            source={item?.image}
            style={{
              width: '100%',
              height: 120,
              borderRadius: 10,
            }}
          />
        </Container>
      </Container>
      <Divider width={1} style={{marginHorizontal: 10}} />
    </>
  );
};

export default MenuItem;
