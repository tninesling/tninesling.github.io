import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { isDayTime } from '../utils/timeUtils';
import dayTheme from '../themes/dayTheme';
import nightTheme from '../themes/nightTheme';

const ContextualThemeProvider = (props: PropsWithChildren<{}>) => {
  const theme = isDayTime() ? dayTheme : nightTheme;
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ContextualThemeProvider;
