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
  Register,
  ListShop
} from '../../container/Pages/index';
import LoginRegisterHome from '../../container/Pages/LoginRegister/Home';
// import Register from '../../container/Pages/LoginRegister/LoginRegister/Register';
// import Login from '../../container/Pages/LoginRegister/LoginRegister/Login';
import insertEmail from '../../container/Pages/ForgotPassword/insertEmail';
import insertCode from '../../container/Pages/ForgotPassword/insertCode';
import insertPassword from '../../container/Pages/ForgotPassword/insertPassword';
import {Icon} from 'react-native-elements';

const Route1 = createStackNavigator(
  {
    ListShop : {
      screen: ListShop,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'ListShop',
  },
);

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
    insertEmail,
    insertCode,
    insertPassword
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

const Router = createStackNavigator(
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
