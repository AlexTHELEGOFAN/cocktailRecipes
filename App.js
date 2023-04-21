import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import About from './pages/About';
import { Ionicons } from '@expo/vector-icons';
import Details from './pages/Details';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#2c0942',
          },
          headerTitleStyle: {
            color: 'orange',
          },
        }}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: '#2c0942',
          },
          headerTitleStyle: {
            color: 'orange',
          },
        }}
      />
      <Stack.Screen
        name='About'
        component={About}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: '#2c0942',
          },
          headerTitleStyle: {
            color: 'orange',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: {
            backgroundColor: '#2c0942',
          },
          tabBarStyle: {
            backgroundColor: '#2c0942',
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{
            backgroundColor: '#280a57',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={20} color='orange' />
            ),
          }}
        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            backgroundColor: '#280a57',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='information' size={20} color='orange' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
