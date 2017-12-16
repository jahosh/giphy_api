import React from 'react';
import { Card } from 'semantic-ui-react';
import './TrendingList.css';

import TrendingListItem from '../TrendingListItem/TrendingListItem';

const TrendingList = ({ trendingGifs }) => {
  const trendingList = trendingGifs.map((gif, idx) => {
    return (
      <TrendingListItem key={idx} gif={gif} count={idx} />
    )
  });
  return (
    <div className="trending-list">
    <Card.Group itemsPerRow={5}>
      { trendingList }
    </Card.Group>
    </div>
  );
};

export default TrendingList;