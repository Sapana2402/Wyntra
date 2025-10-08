/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Dahboard from './src/Screens/Dashboard';
import RootNavigation from './src/Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
      <SafeAreaProvider style={{ paddingTop: StatusBar.currentHeight }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigation />
      </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
