import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default Navigator;