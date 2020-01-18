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
  ListShop,
  Profile,
  aboutUs,
  privacyPolicy,
  termOfUse,
  ListCategory
} from '../../container/Pages/index';
import LoginRegisterHome from '../../container/Pages/LoginRegister/Home';
// import Register from '../../container/Pages/LoginRegister/LoginRegister/Register';
// import Login from '../../container/Pages/LoginRegister/LoginRegister/Login';
import insertEmail from '../../container/Pages/ForgotPassword/insertEmail';
import insertCode from '../../container/Pages/ForgotPassword/insertCode';
import insertPassword from '../../container/Pages/ForgotPassword/insertPassword';
import {Icon} from 'react-native-elements';

const HomeStack = createStackNavigator(
  {
    ListShop,
    Shop,
    ListCategory
  },
  {
    headerMode: 'none',
    initialRouteName: 'Shop',
  },
);

const TransactionStack = createStackNavigator(
  {
    Transaction,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Transaction',
  }
)

const HelpsStack = createStackNavigator(
  {
    Helps
  },
  {
    headerMode: 'none',
    initialRouteName: 'Helps',
  },
);


const ProfileGuestStack = createStackNavigator(
  {
    HomeLogin,
    Login,
    Register,
    insertEmail,
    insertCode,
    insertPassword,
    },
    {
      headerMode: 'none',
    initialRouteName: 'HomeLogin',
  },
);

const ProfileUserStack = createStackNavigator(
  {
    
    Profile,
    termOfUse,
    privacyPolicy,
    aboutUs,
    },
    {
      headerMode: 'none',
    initialRouteName: 'Profile',
  },
);

const RouteGuest = createBottomTabNavigator(
  {
    Belanja: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: TransactionStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: HelpsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: ProfileGuestStack,
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

const RouteUser = createBottomTabNavigator(
  {
    Belanja: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: TransactionStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: HelpsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: ProfileUserStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profil',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const Router = createSwitchNavigator(
  {
    RouteGuest,
    RouteUser
  },
  {
    headerMode: 'none',
    initialRouteName: 'RouteGuest',
  },
);

export default createAppContainer(Router);
