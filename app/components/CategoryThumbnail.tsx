import {Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {customStyle} from '../style/style';

export interface CategoryThumbnailProps {
  name: string;
}

const CategoryThumbnail = (props: CategoryThumbnailProps) => {
  const {name} = props;
  return (
    <View
      style={{
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderRadius: 100 / 2,
        backgroundColor: customStyle.brandPalettePrimary.color,
      }}>
      <Icon
        type="material-community"
        name={name}
        iconStyle={{
          fontSize: 64,
          color: customStyle.brandPaletteSecondary.color,
        }}
        containerStyle={{
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

export default CategoryThumbnail;
