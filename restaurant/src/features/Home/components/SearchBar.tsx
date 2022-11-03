import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Container from '../../../core/components/Container';
import palette from '../../../core/styles/palette';
import Icon from '../../../core/components/Icon';
import Text from '../../../core/components/Text';

const SearchBar: React.FC = () => {
  return (
    <Container flexDirection={'row'}>
      <GooglePlacesAutocomplete
        query={'fds'}
        placeholder={'search'}
        styles={{
          textInput: {
            backgroundColor: palette.background,
            borderRadius: 20,
            marginTop: 7,
            fontWeight: '700',
          },
          textInputContainer: {
            backgroundColor: palette.background,
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => (
          <Container ml={2}>
            <Icon name={'map-marker'} size={24} color={palette.title} />
          </Container>
        )}
        renderRightButton={() => (
          <Container
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={palette.white}
            py={2}
            px={2}
            mr={3}
            borderRadius={20}>
            <Icon name={'clock-time-three'} size={11} color={palette.title} />
            <Text pl={1}>search</Text>
          </Container>
        )}
      />
    </Container>
  );
};

export default SearchBar;
