import React, {useState} from 'react';
import Container from '../../../core/components/Container';
import About from '../components/About';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {MenuItemData} from '../fixture/data';
import MenuItem from '../components/MenuItem';
import {ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import UnStyledButton from '../../../core/components/UnStyledButton';
import palette from '../../../core/styles/palette';
import Text from '../../../core/components/Text';
import {useSelector} from 'react-redux';
import Modal from '../../../core/components/Modal/Modal';
import ModalItem from '../components/ModalItem';

const RestaurantDetails = (): JSX.Element => {
  const route = useRoute();
  const navigation = useNavigation();
  const [visible, setVisible] = useState<boolean>(false);
  const items = useSelector(state => state.cart.item);
  const restaurantName = useSelector(state => state.cart.restaurantName);
  const total = items
    .map(item => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <About data={route.params} />
      <Divider width={2} style={{paddingVertical: 15}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {MenuItemData.map(item => (
          <MenuItem name={route?.params?.name} item={item} key={item.id} />
        ))}
      </ScrollView>
      {total ? (
        <>
          <Container
            alignSelf={'center'}
            width={'80%'}
            position={'absolute'}
            bottom={5}>
            <UnStyledButton
              py={3}
              borderRadius={30}
              backgroundColor={palette.title}
              onPress={() => setVisible(true)}>
              <Container
                px={3}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Text flex={1} textAlign={'center'} color={palette.white} t>
                  about:viewCart
                </Text>
                <Text color={palette.white}>$ {total}</Text>
              </Container>
            </UnStyledButton>
          </Container>
        </>
      ) : (
        <></>
      )}
      <Modal visible={visible} onClose={setVisible}>
        <Container py={3} alignItems={'center'}>
          <Text color={palette.title} fontWeight={'bold'} size={'xr'}>
            {restaurantName}
          </Text>
        </Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModalItem total={total} />
          <Container
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            px={3}
            py={3}>
            <Text fontWeight={'bold'}>Subtotal</Text>
            <Text color={palette.text}>${total}</Text>
          </Container>

          <Container alignSelf={'center'} width={'80%'} py={2}>
            <UnStyledButton
              py={3}
              borderRadius={30}
              backgroundColor={palette.title}
              onPress={() => {
                navigation.navigate('orderCompleted');
                setVisible(false);
              }}>
              <Container
                px={3}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Text flex={1} textAlign={'center'} color={palette.white} t>
                  about:checkOut
                </Text>
                <Text color={palette.white}>$ {total}</Text>
              </Container>
            </UnStyledButton>
          </Container>
        </ScrollView>
      </Modal>
    </>
  );
};

export default RestaurantDetails;
