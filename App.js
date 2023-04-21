import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import About from './pages/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: {
            backgroundColor: '#3B0809',
          },
          tabBarStyle: {
            backgroundColor: '#3B0809',
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            backgroundColor: '#3B0809',

            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={20} color='orange' />
            ),
          }}
        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            backgroundColor: '#3B0809',

            tabBarIcon: ({ color, size }) => (
              <Ionicons name='information' size={20} color='orange' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
