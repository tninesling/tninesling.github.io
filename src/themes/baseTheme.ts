import { Theme } from './types';

const theme: Omit<Theme, 'colors'> = {
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
