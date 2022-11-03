import React, {useCallback} from 'react';
import Container from '../../../core/components/Container';
import {FlatList, FlatListProps, Image} from 'react-native';
import {Category} from '@Home/type';
import Text from '../../../core/components/Text';
import palette from '../../../core/styles/palette';
import UnStyledButton from '../../../core/components/UnStyledButton';

type Props = Omit<FlatListProps<Category>, 'renderItem'>;
const Categories: React.FC<Props> = props => {
  const {...rest} = props;
  const renderItem = useCallback(({item}: {item: Category}) => {
    return (
      <UnStyledButton alignItems={'center'}>
        <Container width={40} height={40}>
          <Image source={item.image} style={{width: '100%', height: '100%'}} />
        </Container>
        <Text fontWeight={'700'} t>
          {item.title}
        </Text>
      </UnStyledButton>
    );
  }, []);
  return (
    <Container backgroundColor={palette.white} px={3} py={2}>
      <FlatList
        {...rest}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Container width={20} />}
      />
    </Container>
  );
};

export default Categories;
