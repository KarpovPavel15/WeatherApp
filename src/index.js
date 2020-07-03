import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { RootPage } from './components/rootPage';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}>
    <RootPage/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
