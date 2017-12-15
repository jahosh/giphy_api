import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { returnTrendingGifs } from '../../giphy';
import TrendingList from '../../components/TrendingList/TrendingList';
import './AppContainer.css';


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
        <header className="App-header">
          <h1 className="App-title">Giphy Api</h1>
        </header>

        { this.state.trending.length ? 
          <Container>
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
