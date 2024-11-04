import {Image} from '@rneui/themed';
import React from 'react';

export interface CategoryThumbnailProps {
  uri: string;
}

const CategoryThumbnail = (props: CategoryThumbnailProps) => {
  const {uri} = props;
  return (
    <Image
      style={{
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderRadius: 100 / 2,
      }}
      containerStyle={{
        alignSelf: 'center',
      }}
      resizeMode="contain"
      source={{
        uri,
      }}
    />
  );
};

export default CategoryThumbnail;
