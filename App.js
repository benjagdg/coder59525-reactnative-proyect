import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Toast from 'react-native-toast-message';

import MainNavigator from './navigation/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createSessionsTable } from './services/sqlite';

createSessionsTable()
  .then()
  .catch((error)=>console.log("Error en SQLite: ", error))

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
        <StatusBar style="auto" />
      </Provider>
      <Toast />
    </SafeAreaProvider>
  );
}
