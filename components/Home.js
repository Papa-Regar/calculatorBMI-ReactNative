import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Info from './Info';
import Calculation from './Calculation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export class Home extends Component {
  render() {
    return (
        <NavigationContainer independent='true'>
        <Tab.Navigator
        initialRouteName='Splash'
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;
 
             if (route.name === 'Calculation') {
               iconName = focused
                 ? 'ios-home'
                 : 'ios-home-outline';
             } else if (route.name === 'Info') {
               iconName = focused ? 'ios-information' : 'ios-information-outline';
             }
 
             // You can return any component that you like here!
             return <Ionicons name={iconName} size={size} color={color} />;
           },
           tabBarActiveTintColor: 'red',
           tabBarInactiveTintColor: 'gray',
           headerShown: false,
          
         })}
         
       >
       <Tab.Screen name="Calculation" component={Calculation} />
       <Tab.Screen name="Info" component={Info} />
     </Tab.Navigator>
     </NavigationContainer>
    )
  }
}

export default Home
