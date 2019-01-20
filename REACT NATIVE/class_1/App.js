import { HomeComponent, AboutComponent } from './component';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const App = createStackNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: () => ({
      title: 'Welcome Home',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  About: {
    screen: AboutComponent,
    navigationOptions: () => ({
      title: 'About Page',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
});

export default createAppContainer(App);