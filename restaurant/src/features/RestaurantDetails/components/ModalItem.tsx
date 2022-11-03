import React from 'react';
import {useSelector} from 'react-redux';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {useTheme} from 'styled-components';

type Props = {
  total: number;
};
const ModalItem: React.FC<Props> = ({total}) => {
  const item = useSelector(state => state.cart.item);
  const {palette} = useTheme();
  return (
    <Container alignItems={'center'}>
      {item.map(food => (
        <Container
          py={3}
          width={'90%'}
          borderBottomWidth={1}
          borderBottomColor={palette.border}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          px={3}>
          <Text fontWeight={'bold'}>{food.name}</Text>
          <Text color={palette.text}>${food.price}</Text>
        </Container>
      ))}
    </Container>
  );
};

export default ModalItem;
