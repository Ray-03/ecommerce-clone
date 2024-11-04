import {SearchBar, Header, Icon} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const AppHeader = () => {
  return (
    <Header
      placement="left"
      centerComponent={
        <SearchBar
          containerStyle={{
            flexDirection: 'row',
          }}
        />
      }
      rightComponent={
        <TouchableOpacity
        //  onPress={shopBagNavigate}
        >
          <Icon name="shopping-bag" />
        </TouchableOpacity>
      }
    />
  );
};

export default AppHeader;
