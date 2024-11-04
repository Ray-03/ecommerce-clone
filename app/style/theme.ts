import {createTheme, darkColors, lightColors} from '@rneui/themed';
import {Platform} from 'react-native';
import {customStyle} from './style';

export const customTheme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
    primary: '#26404F',
    background: '#F3AE48',
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
    primary: '#26404F',
    background: '#F3AE48',
  },
  components: {
    Icon: {
      iconStyle: customStyle.touchableDefault,
      color: 'white',
    },
    Header: {
      rightContainerStyle: {
        justifyContent: 'center',
      },
      containerStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      },
    },
  },
});
