
                import React from 'react';
import ReactDOM from 'react-dom';
import CustomIconGenerator from './CustomIconGenerator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomIconGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
