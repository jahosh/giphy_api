import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../containers/AppContainer/AppContainer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


it('renders without crashing', () => {
  const mock = new MockAdapter(axios);
  mock.onGet().reply(200, { 'data': [] })
  
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
});
