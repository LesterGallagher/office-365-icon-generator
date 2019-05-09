
                import React from 'react';
import ReactDOM from 'react-dom';
import AppSelector from './AppSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
