import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homeScreen';
import PlanetScreen from './components/planet';
import ChoiceScreen from './components/pilihan';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saturn" component={PlanetScreen} />
        <Stack.Screen name="Choice" component={ChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
