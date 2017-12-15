import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../containers/AppContainer/AppContainer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import TrendingList from '../components/TrendingList/TrendingList';

Enzyme.configure({ adapter: new Adapter() });

describe("AppContainer", () => {
  let props;
  let mountedApp;
  let shallowApp;

  const App = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <AppContainer />
      );
    }
    return mountedApp;
  }

  const sApp = () => {
    if (!shallowApp) {
      shallowApp = shallow(
        <AppContainer />
      );
    }
    return shallowApp;
  }

  beforeEach(() => {
    props = undefined;
    mountedApp = undefined;
    shallowApp = undefined;
  })

  it('renders without crashing', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, { 'data': [] })
    const div = document.createElement('div');
    ReactDOM.render(<AppContainer />, div);
  });

  it('always renders a div', () => {
    const divs = App().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('it properly sets up state', () => {
    expect(sApp().state().trending).toEqual(expect.arrayContaining([]));
    sApp().update()
    console.log(sApp().state());
  });
});

