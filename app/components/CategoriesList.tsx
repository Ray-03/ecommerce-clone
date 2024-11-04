import React from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {IProductCategory} from '../interfaces';
import {useGetProductsCategoriesQuery} from '../redux/apiSlice';
import {Card, Image} from '@rneui/themed';
import CategoryThumbnail from './CategoryThumbnail';

const CategoriesList = () => {
  const {data: categories, isLoading} = useGetProductsCategoriesQuery();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item.slug}
      renderItem={({item}: {item: IProductCategory}) => (
        <Card containerStyle={{maxWidth: 120}} wrapperStyle={{height: '100%'}}>
          <CategoryThumbnail uri={'https://picsum.photos/200'} />
          <Card.Title
            style={{
              flex: 1,
              textAlignVertical: 'center',
            }}>
            {item.name}
          </Card.Title>
        </Card>
      )}
    />
  );
};

export default CategoriesList;
