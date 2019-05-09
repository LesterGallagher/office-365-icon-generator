
                import React from 'react';
import ReactDOM from 'react-dom';
import AppIconGenerator from './AppIconGenerator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppIconGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
