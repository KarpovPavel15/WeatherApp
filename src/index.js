import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { RootPage } from './components/rootPage';

ReactDOM.render(<RootPage />, document.getElementById('root'));

serviceWorker.unregister();
