// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QRCode from 'react-native-qrcode-svg'
import HomeScreen from './screens/HomeScreen';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Auth0Provider} from 'react-native-auth0';
import {Enclave} from './helpers'
const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    const getPair = async () => {
      console.log(await Enclave.getPublicKey())
    }
    getPair()
  }, [])
  const scheme = useColorScheme();
  return (
    <Auth0Provider
      domain={'dev-63zyub2tmag74b70.us.auth0.com'}
      clientId={'TGYP3uM95cpkfwwt0PdNF3YaU25qY3K1'}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}

export default App;