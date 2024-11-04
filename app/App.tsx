import React, {useEffect} from 'react';
import {useColorScheme, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {customTheme} from './style/theme';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppHeader from './components/AppHeader';
import SplashScreen from 'react-native-splash-screen';
import CategoriesList from './components/CategoriesList';

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
            <CategoriesList />
          </ScrollView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
