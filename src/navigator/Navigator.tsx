import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#3a86ff',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.82)',
                    paddingBottom: (Platform.OS === 'ios') ? 0 : 7,
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 70 : 65,
                    paddingTop: 10
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={30}
                            name='home-outline'
                        />
                    )
                }}
                name="HomeScreen" component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Create',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={30}
                            name='add-circle-outline'
                        />
                    )
                }}
                name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default Navigator;