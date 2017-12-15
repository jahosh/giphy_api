import React from 'react';
import ReactDOM from 'react-dom';
import TrendingList from '../components/TrendingList/TrendingList';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrendingList trendingGifs={[]} />, div);
});
