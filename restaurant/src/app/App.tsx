import React from 'react';

import {I18nextProvider} from 'react-i18next';
import i18n from '../core/config/i18n';
import {ThemeProvider} from 'styled-components';
import defaultTheme from '../core/styles/theme/defaultTheme';
import {QueryClientProvider} from 'react-query';
import queryClient from '../core/helpers/reactQuery';
import AppNavigator from './navigator/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../core/store/Store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={defaultTheme}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </QueryClientProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
