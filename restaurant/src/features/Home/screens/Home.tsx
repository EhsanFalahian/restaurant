import React, {useCallback, useEffect, useState} from 'react';
import Container from 'core/components/Container';
import palette from 'core/styles/palette';
import HeaderTabs from '@Home/components/HeaderTabs';
import SearchBar from '@Home/components/SearchBar';
import Categories from '@Home/components/Categories';
import {CategoryData, LocalRestaurants} from '@Home/fixture/data';
import RestaurantItem from '@Home/components/RestaurantItem';
import {useQuery} from 'react-query';
import {getRestaurants} from '@Home/api';
import Text from 'core/components/Text';
import {ScrollView} from 'react-native';
import {Restaurant, RestaurantServer} from '@Home/type';

const Home = (): JSX.Element => {
  const [selectBtn, setSelectBtn] = useState<string>('Delivery');
  const {data, isLoading} = useQuery(['restaurant'], () => getRestaurants());
  const [restaurantData, setRestaurant] = useState<Restaurant[]>();

  const selectHandler = useCallback(
    name => {
      setSelectBtn(name);
    },
    [selectBtn, setSelectBtn],
  );
  useEffect(() => {
    setRestaurant(
      data?.businesses.filter(business =>
        business.transactions.includes(selectBtn.toLowerCase()),
      ),
    );
  }, [data, selectBtn, setSelectBtn]);
  return (
    <Container backgroundColor={palette.background} flex={1}>
      <Container backgroundColor={palette.white} my={2} px={3} height={150}>
        <HeaderTabs select={selectBtn} setSelected={selectHandler} />
        <SearchBar />
      </Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories data={CategoryData} />
        {isLoading ? (
          <Text>loading</Text>
        ) : (
          <Container mt={3}>
            {restaurantData?.map(item => (
              <RestaurantItem data={item} key={item.id} />
            ))}
          </Container>
        )}
      </ScrollView>
    </Container>
  );
};

export default Home;
