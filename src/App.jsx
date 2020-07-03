import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { RootPage } from './components/rootPage';


export default function App() {
    return (
        <Provider store={store}>
                <RootPage/>
        </Provider>
    )
};
