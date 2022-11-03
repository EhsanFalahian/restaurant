import React from 'react';
import Container from '../../../core/components/Container';
import {buttons} from '@Home/fixture/data';
import HeaderButton from '@Home/components/HeaderButton';

type Props = {
  select: string;
  setSelected: (name: string) => void;
};

const HeaderTabs: React.FC<Props> = ({select, setSelected}) => {
  return (
    <Container flexDirection={'row'} justifyContent={'center'} py={3}>
      {buttons.map(items => (
        <HeaderButton
          {...items}
          key={items.id}
          selected={select}
          onSelected={setSelected}
        />
      ))}
    </Container>
  );
};

export default HeaderTabs;
