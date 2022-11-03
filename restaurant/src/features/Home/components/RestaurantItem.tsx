import React from 'react';
import {Image} from 'react-native';
import {Restaurant} from '@Home/type';
import Container from 'core/components/Container';
import UnStyledButton from 'core/components/UnStyledButton';
import Icon from 'core/components/Icon';
import palette from 'core/styles/palette';
import Text from 'core/components/Text';
import {useNavigation} from '@react-navigation/native';

type Props = {
  data: Restaurant;
};
const RestaurantItem: React.FC<Props> = props => {
  const {data} = props;

  const navigation = useNavigation();

  // const renderItem = useCallback(
  //   ({item}: {item: Restaurant}) => {
  //     return (
  //       <UnstyledButton backgroundColor={palette.white} px={3} flex={1}>
  //         <Container height={200}>
  //           <Image
  //             source={{uri: item.image_url}}
  //             style={{width: '100%', height: '100%'}}
  //           />
  //           <Container position={'absolute'} right={20} top={10}>
  //             <UnstyledButton>
  //               <Icon
  //                 name={'cards-heart-outline'}
  //                 size={30}
  //                 color={palette.white}
  //               />
  //             </UnstyledButton>
  //           </Container>
  //         </Container>
  //         <Container
  //           flexDirection={'row'}
  //           alignItems={'center'}
  //           justifyContent={'space-between'}>
  //           <Container py={2}>
  //             <Text fontWeight={'bold'}>{item.name}</Text>
  //             <Text color={palette.text}>35-45 . min</Text>
  //           </Container>
  //           <Container
  //             width={30}
  //             height={30}
  //             backgroundColor={palette.background}
  //             borderRadius={20}
  //             alignItems={'center'}
  //             justifyContent={'center'}>
  //             <Text>{item.rating}</Text>
  //           </Container>
  //         </Container>
  //       </UnstyledButton>
  //     );
  //   },
  //   [data],
  // );

  return (
    <UnStyledButton
      backgroundColor={palette.white}
      px={3}
      mb={30}
      flex={1}
      onPress={() =>
        // {
        //   console.log(data.price);
        // }
        navigation.navigate('restaurantDetails', {
          name: data.name,
          image: data.image_url,
          review: data.review_count,
          rating: data.rating,
          price: data.price,
          categories: data.categories,
        })
      }>
      <Container height={200}>
        <Image
          source={{uri: data.image_url}}
          style={{width: '100%', height: '100%'}}
        />
        <Container position={'absolute'} right={20} top={10}>
          <UnStyledButton>
            <Icon
              name={'cards-heart-outline'}
              size={30}
              color={palette.white}
            />
          </UnStyledButton>
        </Container>
      </Container>
      <Container
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Container py={2}>
          <Text fontWeight={'bold'}>{data.name}</Text>
          <Text color={palette.text}>35-45 . min</Text>
        </Container>
        <Container
          width={30}
          height={30}
          backgroundColor={palette.background}
          borderRadius={20}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text>{data.rating}</Text>
        </Container>
      </Container>
    </UnStyledButton>
  );
};

export default RestaurantItem;
