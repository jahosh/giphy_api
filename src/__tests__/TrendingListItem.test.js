import React from 'react';
import ReactDOM from 'react-dom';
import TrendingListItem from '../components/TrendingListItem/TrendingListItem';
import trendingJson from './mock_data/trendingmock.json'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrendingListItem key={1} count={1} gif={trendingJson} />, div);
});