import React, {Dispatch, FunctionComponent} from 'react';
import {Modal as ModalComponent, ModalProps} from 'react-native';
import UnStyledButton from '../UnStyledButton';
import Container from '../Container';
import {useTheme} from 'styled-components';
import Text from '../Text';
import {convertHexToRGBA} from '../../styles/color';

type Props = ModalProps & {
  onClose?: Dispatch<React.SetStateAction<boolean>>;
};
const Modal: FunctionComponent<Props> = ({
  onClose,
  visible,
  children,
  ...res
}) => {
  const {palette} = useTheme();
  return (
    <ModalComponent
      {...res}
      visible={visible}
      animationType={'slide'}
      transparent={true}
      animated={true}>
      <UnStyledButton
        flex={1}
        onPress={() => onClose?.(!visible)}
        backgroundColor={convertHexToRGBA(palette.border, 30)}
      />
      <Container
        height={450}
        width={'100%'}
        backgroundColor={palette.white}
        position={'absolute'}
        flex={1}
        overflow={'hidden'}
        bottom={0}>
        {children}
      </Container>
    </ModalComponent>
  );
};

export default Modal;
