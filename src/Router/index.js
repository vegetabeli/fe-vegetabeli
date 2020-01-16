import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../pages/Profile/profileHome/Index';

const Router = createStackNavigator (
    {
        Profile: {
            screen: Profile
        },
    },
    {
        headerMode : 'none',
        initialRouteName : 'Profile',
    }
);

export default createAppContainer(Router);