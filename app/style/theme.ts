import {createTheme, darkColors, lightColors} from '@rneui/themed';
import {Platform} from 'react-native';
import {customStyle} from './style';

export const customTheme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
    primary: customStyle.brandPalettePrimary.color,
    background: customStyle.brandPaletteSecondary.color,
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
    primary: customStyle.brandPalettePrimary.color,
    background: customStyle.brandPaletteSecondary.color,
  },
  components: {
    Icon: {
      iconStyle: customStyle.touchableDefault,
      color: 'white',
    },
    Header: {
      rightContainerStyle: customStyle.rightHeaderContainer,
      containerStyle: customStyle.headerContainer,
    },
    Card: {
      containerStyle: customStyle.cardDefault,
    },
  },
});
