import styled from 'styled-components';
import {Text} from 'react-native';
import {TextProps} from '../Text/Text';
import fontSizes from '../../styles/fontSize';
import fonts from '../../styles/fonts';
import {getTextColor} from '../../styles/color';
import {border, color, flexbox, space, typography} from 'styled-system';

export const StyledText = styled(Text)<TextProps>`
  font-size: ${({size}) => fontSizes[size ?? 'r']}px;
  font-family: ${({font}) => fonts[font ?? 'normal']};
  color: ${({theme, color}) => getTextColor(theme, color)};

  ${flexbox}
  ${space}
  ${border}
  ${typography}
  ${color}
`;
