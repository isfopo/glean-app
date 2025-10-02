/**
 * @format
 */

import 'web-streams-polyfill';
import './platform-polyfills';
import { AppRegistry, NativeModules } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
