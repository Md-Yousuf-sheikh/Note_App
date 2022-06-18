import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Edit from './src/screens/Edit';
import Create from './src/screens/Create';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';


//  Default Theme
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: " #fff",
  },

}


// D
const Stack = createNativeStackNavigator();

function App() {
  const user = false;
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>

        {
          user ?
            ( // user login
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Create" component={Create} />
              </>)
            :
            ( // user log out
              <>
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
              </>)
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


