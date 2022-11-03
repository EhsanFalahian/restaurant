import React from 'react';
import UnStyledButton from 'core/components/UnStyledButton';
import Text from '../../../core/components/Text';

import {HeaderBtn} from '@Home/type';
import palette from '../../../core/styles/palette';

type Props = HeaderBtn & {
  selected: string;
  onSelected: (id: string) => void;
};

const HeaderButton: React.FC<Props> = ({
  title,
  id,
  selected,
  onSelected,
  type,
}) => {
  return (
    <UnStyledButton
      onPress={() => onSelected(id === 1 ? 'Delivery' : 'Pickup')}
      alignItems={'center'}
      px={3}
      py={2}
      borderRadius={20}
      backgroundColor={selected.includes(type) ? palette.title : palette.white}
      mx={2}
      width={100}>
      <Text
        fontWeight={'bold'}
        color={selected.includes(type) ? palette.white : palette.title}
        t>
        {title}
      </Text>
    </UnStyledButton>
  );
};

export default HeaderButton;
