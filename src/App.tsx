import * as React from 'react';

export interface AppProps {
  display: string;
}

const App = (props: AppProps) => {
  const { display } = props;
  return <h1>App Root | {display}</h1>;
};

export default App;
