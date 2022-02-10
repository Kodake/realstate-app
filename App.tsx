import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;