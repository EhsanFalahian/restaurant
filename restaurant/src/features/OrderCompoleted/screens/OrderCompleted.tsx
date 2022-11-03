import React from 'react';
import Container from '../../../core/components/Container';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import Text from '../../../core/components/Text';
import {ScrollView} from 'react-native';
import OrderItem from '../components/OrderItem';

const OrderCompleted = (): JSX.Element => {
  const items = useSelector(state => state.cart.item);
  const restaurantName = useSelector(state => state.cart.restaurantName);
  const total = items
    .map(item => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <Container flex={1}>
      <Container alignItems={'center'} py={3}>
        <LottieView
          style={{height: 100}}
          source={require('app/assets/images/check-mark.json')}
          autoPlay={true}
          speed={0.5}
          loop={false}
        />
      </Container>
      <Container width={'95%'} px={2} pb={5}>
        <Text fontWeight={'bold'}>
          Your order at {restaurantName} has been placed for ${total}
        </Text>
      </Container>
      <ScrollView>
        {items.map(item => (
          <OrderItem item={item} key={item.id} />
        ))}

        <Container py={3} alignSelf={'center'}>
          <LottieView
            style={{
              height: 250,
              alignItems: 'center',
            }}
            source={require('app/assets/images/cooking.json')}
            autoPlay={true}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};

export default OrderCompleted;
