import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import { store, persitor } from './store';
import theme from './config/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
