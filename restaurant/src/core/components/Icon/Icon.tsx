import React from 'react';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

export type Props = IconProps;

const Icon = (prop: Props): JSX.Element => {
  return <VectorIcon {...prop} />;
};

export default Icon;
