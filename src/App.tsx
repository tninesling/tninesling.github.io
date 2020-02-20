import * as React from 'react';
import { Flex, Heading } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from './themes/theme';

export interface AppProps {
  display: string;
}

const App = (props: AppProps) => {
  const { display } = props;
  return (
    <ThemeProvider theme={theme}>
      <Flex width="100%" justifyContent="center">
        <Heading>App Root | {display}</Heading>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
