


import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Screenku from './screen/Screenku';
import Isi from './screen/Detail/Isi';
import Isi2 from './screen/Detail/Isi2';
import Isi3 from './screen/Detail/Isi3';
import Isi4 from './screen/Detail/Isi4';
import Isi5 from './screen/Detail/Isi5';
import Isi6 from './screen/Detail/Isi6';
import Isi7 from './screen/Detail/Isi7';
import Isi8 from './screen/Detail/Isi8';
import Isi9 from './screen/Detail/Isi9';
import Isi10 from './screen/Detail/Isi10';
import Isi11 from './screen/Detail/Isi11';
import Isi12 from './screen/Detail/Isi12';
import Isi13 from './screen/Detail/Isi13';
import Isi14 from './screen/Detail/Isi14';
import Isi15 from './screen/Detail/Isi15';
import Isi16 from './screen/Detail/Isi16';
import Isi17 from './screen/Detail/Isi17';
import Isi18 from './screen/Detail/Isi18';
import Isi19 from './screen/Detail/Isi19';
import Payment from './screen/Payment'

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
    }},
    Isi2: { screen: Isi2, navigationOptions:{
      headerShown: false
    }},
    Isi3: { screen: Isi3, navigationOptions:{
      headerShown: false
    }},
    Isi4: { screen: Isi4, navigationOptions:{
      headerShown: false
    }},
    Isi5: { screen: Isi5, navigationOptions:{
      headerShown: false
    }},
    Isi6: { screen: Isi6, navigationOptions:{
      headerShown: false
    }},
    Isi7: { screen: Isi7, navigationOptions:{
      headerShown: false
    }},
    Isi8: { screen: Isi8, navigationOptions:{
      headerShown: false
    }},
    Isi9: { screen: Isi9, navigationOptions:{
      headerShown: false
    }},
    Isi10: { screen: Isi10, navigationOptions:{
      headerShown: false
    }},
    Isi11: { screen: Isi11, navigationOptions:{
      headerShown: false
    }},
    Isi12: { screen: Isi12, navigationOptions:{
      headerShown: false
    }},
    Isi13: { screen: Isi13, navigationOptions:{
      headerShown: false
    }},
    Isi14: { screen: Isi14, navigationOptions:{
      headerShown: false
    }},
    Isi15: { screen: Isi15, navigationOptions:{
      headerShown: false
    }},
    Isi16: { screen: Isi16, navigationOptions:{
      headerShown: false
    }},
    Isi17: { screen: Isi17, navigationOptions:{
      headerShown: false
    }},
    Isi18: { screen: Isi18, navigationOptions:{
      headerShown: false
    }},
    Isi19: { screen: Isi19, navigationOptions:{
      headerShown: false
    }},
    Payment: { screen: Payment, navigationOptions:{
      headerShown: false
    }},
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

