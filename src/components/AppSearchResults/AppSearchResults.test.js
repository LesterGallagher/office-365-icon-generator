
                import React from 'react';
import ReactDOM from 'react-dom';
import AppSearchResults from './AppSearchResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppSearchResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});
