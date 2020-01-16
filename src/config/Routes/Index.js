import React, {Component} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Helps,
  Shop,
  Home,
  Landing,
  Transaction,
  Profile,
} from '../../containers/pages/index';
import {Icon} from 'react-native-elements';

const Route1 = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const Route2 = createStackNavigator(
  {
    Landing,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Landing',
  },
);

const RouteTab = createBottomTabNavigator(
  {
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaction: {
      screen: Transaction,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Helps: {
      screen: Helps,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Shop',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const Router = createSwitchNavigator(
  {
    Route1,
    Route2,
    RouteTab,
  },
  {
    headerMode: 'none',
    initialRouteName: 'RouteTab',
  },
);

export default createAppContainer(Router);
