import React, { useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import store, {persistor} from './src/store';

import Tree from './src/pages/Arvoredearquivos';
import Home from './src/pages/Home';
import { azulclaro, azulescuro, white } from './src/config/colors';


const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack(): JSX.Element{
  return (
    <HomeStackNavigator.Navigator initialRouteName='Home'>
      <HomeStackNavigator.Screen name="Home" component={Home}></HomeStackNavigator.Screen>
      <HomeStackNavigator.Screen name="Arquivos" component={Tree}></HomeStackNavigator.Screen>
    </HomeStackNavigator.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
            <HomeStackNavigator.Navigator initialRouteName='HomeStack'>
              <HomeStackNavigator.Screen name='HomeStack' component={HomeStack} options={({route}) => ({ 
                headerShown: false,
                title: "Home",
                tabBarActiveTintColor: white,
                tabBarActiveBackgroundColor: azulclaro,
                tabBarInactiveTintColor: azulclaro,
                tabBarStyle: ((route) => {
                  const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                  if (routeName === 'Login' || routeName === "") {
                    return { display: "none" }
                  }
                  return
                })(route),
              })}></HomeStackNavigator.Screen>
            </HomeStackNavigator.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;