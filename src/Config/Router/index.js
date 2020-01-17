import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginRegisterHome from '../../Container/Pages/LoginRegister/Home';
import Register from '../../Container/Pages/LoginRegister/LoginRegister/Register';
import Login from '../../Container/Pages/LoginRegister/LoginRegister/Login';
import insertEmail from '../../Container/Pages/ForgotPassword/insertEmail';
import insertCode from '../../Container/Pages/ForgotPassword/insertCode';
import insertPassword from '../../Container/Pages/ForgotPassword/insertPassword';

const Router = createStackNavigator(
  {
    LoginRegisterHome,
    Register,
    Login,
    insertEmail,
    insertCode,
    insertPassword
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginRegisterHome'
  }
)

export default createAppContainer(Router)