/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GoogleSignin } from '@react-native-google-signin/google-signin'; //FIREBASE  

//Adicionado para o Firebase
GoogleSignin.configure({
  webClientId: '914118093330-1oc0bjp5erjv47t0vbe49834jtulqih3.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
