import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const TrendingListItem = ({ gif, count }) => {
  const gifImage = gif.images.fixed_width.url;

  return (
      <Card>
        <Image src={gifImage} />
        <Card.Content>
          <Card.Header>
            # {count+1}
      </Card.Header>
          <Card.Meta>
            <span className='date'>
              trending since: {gif.trending_datetime}
        </span>
          </Card.Meta>
          <Card.Description>
            <a href={gif.url} target="_blank" rel="noopener noreferrer">
              <Button color='blue'>
                Link
              </Button>
            </a>
      </Card.Description>
        </Card.Content>
      </Card>
  );
};

export default TrendingListItem;