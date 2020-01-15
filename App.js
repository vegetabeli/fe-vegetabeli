
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Screenku from './screen/Screenku';
import Isi from './screen/Isi';


/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Screenku: { screen: Screenku, navigationOptions:{
        headerShown: false
    }},
    Isi: { screen: Isi, navigationOptions:{
      headerShown: false
  }}
});

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

export default App;
