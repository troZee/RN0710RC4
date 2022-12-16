import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Root = (props) => {
    return <GestureHandlerRootView style={{ flex: 1 }}><App {...props}/></GestureHandlerRootView>;
}

AppRegistry.registerComponent(appName, () => Root);
