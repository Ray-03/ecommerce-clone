import React from 'react';
import {View, useColorScheme, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Icon, SearchBar} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {customTheme} from './style/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={customTheme}>
      <SafeAreaProvider style={backgroundStyle}>
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
            //  onPress={shopCartNavigate}
            >
              <Icon name="shopping-cart" />
            </TouchableOpacity>
          }
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View></View>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
