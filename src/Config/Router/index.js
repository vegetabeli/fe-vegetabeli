import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginRegisterHome from '../../Container/Pages/LoginRegister/Home';
import Register from '../../Container/Pages/LoginRegister/LoginRegister/Register';
import Login from '../../Container/Pages/LoginRegister/LoginRegister/Login';

const Router = createStackNavigator(
  {
    LoginRegisterHome,
    Register,
    Login
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginRegisterHome'
  }
)

export default createAppContainer(Router)