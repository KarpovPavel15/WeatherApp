import React from 'react';
import ReactDOM from 'react-dom';
import RootPage from './rootPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RootPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
