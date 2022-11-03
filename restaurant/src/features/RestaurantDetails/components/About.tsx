import React from 'react';
import Container from '../../../core/components/Container';
import {Image} from 'react-native';
import {AboutData} from '../fixture/data';
import Text from '../../../core/components/Text';
import {Abb} from '../type';

type Props = {
  data: Abb;
};

const About: React.FC<Props> = ({data}) => {
  const {rating, name, categories, review, image_url, price} = data;
  const formattedCategory = categories.map(cat => cat.title).join('.');
  const description = `${formattedCategory} ${
    price ? '.' + price : ''
  } ${rating} (${review}+)`;
  return (
    <Container>
      <Image source={AboutData[0].image} style={{width: '100%', height: 200}} />
      <Text fontWeight={'bold'} size={'xl'} px={2} py={2}>
        {name}
      </Text>
      <Text px={2}>{description}</Text>
    </Container>
  );
};

export default About;
