import { AppRegistry } from 'react-native';
import { Client } from 'bugsnag-react-native';
import Wallet from './routes/entry';

AppRegistry.registerComponent('iotaWallet', () => Wallet);
const bugsnag = new Client();
