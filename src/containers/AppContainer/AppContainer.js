import React, { Component } from 'react';

import { returnTrendingGifs } from '../../giphy';

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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Api</h1>
        </header>
        
      </div>
    );
  }
}

export default AppContainer;
