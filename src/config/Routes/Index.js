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
<<<<<<< HEAD
  ListCategory
=======
>>>>>>> 207e6690c3d9e4c599db91e1591de1169f320ee4
} from '../../container/Pages/index';
import LoginRegisterHome from '../../container/Pages/LoginRegister/Home';
// import Register from '../../container/Pages/LoginRegister/LoginRegister/Register';
// import Login from '../../container/Pages/LoginRegister/LoginRegister/Login';
import insertEmail from '../../container/Pages/ForgotPassword/insertEmail';
import insertCode from '../../container/Pages/ForgotPassword/insertCode';
import insertPassword from '../../container/Pages/ForgotPassword/insertPassword';
import verifyOtp from '../../container/Pages/LoginRegister/LoginRegister/otp/';
import {Icon} from 'react-native-elements';

<<<<<<< HEAD
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
=======
const Route2 = createStackNavigator(
  {
    HomeLogin: {
      screen: HomeLogin,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
>>>>>>> 207e6690c3d9e4c599db91e1591de1169f320ee4
    insertEmail,
    insertCode,
    insertPassword,
    verifyOtp,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeLogin',
  },
);

const ProfileUserStack = createStackNavigator(
  {
    Profile,
<<<<<<< HEAD
    termOfUse,
=======
    termOfUse: {
      screen: termOfUse,
    },
>>>>>>> 207e6690c3d9e4c599db91e1591de1169f320ee4
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
<<<<<<< HEAD
    RouteGuest,
    RouteUser
=======
    Route2,
    Route3,
    RouteTab,
    RouteTabUser,
>>>>>>> 207e6690c3d9e4c599db91e1591de1169f320ee4
  },
  {
    headerMode: 'none',
    initialRouteName: 'RouteGuest',
  },
);

export default createAppContainer(Router);
