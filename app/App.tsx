import React, {useEffect} from 'react';
import {useColorScheme, TouchableOpacity, ScrollView, View} from 'react-native';
import {Header, Icon, SearchBar} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {customTheme} from './style/theme';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppHeader from './components/AppHeader';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <SafeAreaProvider style={backgroundStyle}>
          <AppHeader />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View></View>
          </ScrollView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
