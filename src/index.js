import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import './index.css';
import 'onsenui/css/onsenui.css';
import './onsen-css-theme/onsen-css-components.css'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import GooglePlayStore from './flux-stores/GooglePlayStore';

ons.platform.select('android');
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

