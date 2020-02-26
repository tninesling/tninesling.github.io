import colors from './colors';

const theme = {
  colors: {
    primaryBackgroundColor: colors.lightPurple,
    secondaryBackgroundColor: colors.darkPurple,
    textColor: colors.white,
    footerBackgroundColor: colors.darkPurple,
  },
  fonts: {
    body: '"Comfortaa", cursive',
    heading: '"Comfortaa", cursive',
  },
  text: {
    heading: {
      fontFamily: 'heading',
    },
    body: {
      fontFamily: 'body',
      color: 'textColor',
    },
  },
};

export default theme;
