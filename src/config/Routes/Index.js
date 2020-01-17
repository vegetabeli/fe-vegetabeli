import React, {Component} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Helps,
  Shop,
  Transaction,
  HomeLogin,
  Login,
  Register
} from '../../Container/Pages/index';
import {Icon} from 'react-native-elements';


const Route2 = createStackNavigator(
  {
    HomeLogin: {
      screen: HomeLogin,
    },
    Login : {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeLogin',
  },
);

const RouteTab = createBottomTabNavigator(
  {
    Belanja: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: Transaction,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: Helps,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: HomeLogin,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Belanja',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const Router = createSwitchNavigator(
  {
    Route2,
    RouteTab,
  },
  {
    headerMode: 'none',
    initialRouteName: 'RouteTab',
  },
);

export default createAppContainer(Router);
