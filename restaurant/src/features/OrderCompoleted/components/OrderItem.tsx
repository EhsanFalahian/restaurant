import React from 'react';
import {OrderItemType} from '../type';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {Image} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';

type Props = {
  item: OrderItemType;
};

const MenuItem: React.FC<Props> = props => {
  const {item} = props;

  return (
    <>
      <Container
        px={2}
        py={2}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        pl={3}>
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
