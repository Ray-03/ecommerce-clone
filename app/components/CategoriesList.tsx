import React from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {IProductCategory} from '../interfaces';
import {useGetProductsCategoriesQuery} from '../redux/apiSlice';
import {Card, Divider, Image} from '@rneui/themed';
import CategoryThumbnail from './CategoryThumbnail';
import {customStyle} from '../style/style';
import {KSlugIconMapping} from '../constants/const';

const CategoriesList = () => {
  const {data: categories, isLoading} = useGetProductsCategoriesQuery();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const allProductCategory: IProductCategory = {
    name: 'View All',
    slug: 'view-all',
    url: '-',
  };

  const categoriesData: IProductCategory[] = [
    ...(categories ?? []).slice(0, 5),
    allProductCategory,
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoriesData}
      keyExtractor={item => item.slug}
      renderItem={({item}: {item: IProductCategory}) => (
        <Card
          containerStyle={{
            maxWidth: 120,
            backgroundColor: customStyle.brandPaletteSecondary.color,
          }}
          wrapperStyle={{height: '100%'}}>
          <CategoryThumbnail name={KSlugIconMapping[item.slug]} />
          <Divider />
          <Card.Title
            style={{
              flex: 1,
              textAlignVertical: 'center',
              marginBottom: 0,
            }}>
            {item.name}
          </Card.Title>
        </Card>
      )}
    />
  );
};

export default CategoriesList;
