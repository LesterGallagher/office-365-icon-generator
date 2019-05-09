
                import React from 'react';
import ReactDOM from 'react-dom';
import GenerateIconsForMostPopularApps from './GenerateIconsForMostPopularApps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenerateIconsForMostPopularApps />, div);
  ReactDOM.unmountComponentAtNode(div);
});
