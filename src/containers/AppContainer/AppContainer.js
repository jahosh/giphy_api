import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { returnTrendingGifs } from '../../giphy';
import './AppContainer.css';

import Header from '../../components/Header/Header';
import TrendingList from '../../components/TrendingList/TrendingList';
import Search from '../../components/Search/Search';



class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: []
    }
  }
  componentDidMount() {
    returnTrendingGifs()
    .then((trendingGifs) => {
      this.setState({
        trending: trendingGifs
      })
    })
    .catch(e => console.log(e)); 
  }
  render() {
    const { trending } = this.state;
    return (
      <div className="App">
        <Header />
        <Search />
        { this.state.trending.length ? 
          <Container>
            <h3> Top Trending Giphys </h3>
            <TrendingList trendingGifs={trending} />
          </Container>
          :
          'loading...'
        }
      </div>
    );
  }
}

export default AppContainer;
