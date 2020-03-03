import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen
},
{
	initialRounteName: 'Index',
	defaultNavigationOptions:{
		title: 'Blogs'
	}
});

const App = createAppContainer(navigator);

export default () => {
  return <App />
}