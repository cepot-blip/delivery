import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket, Explore, Home, Login, Register, Splash, User} from '../screens';
import BottomNavigator from './BottomTabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{headerShown: false}}
      />
      <Tab.Screen name="User" component={User} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Routes;
