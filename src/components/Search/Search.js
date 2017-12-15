import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import { returnSearchResults } from '../../giphy';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: ''
    }

    this.resetSearch = this.resetSearch.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.resetSearch();
  }

  resetSearch() {
    this.setState({
      isLoading: false, 
      results: [], 
      value: ''
    });
  }

  handleResultSelect(e, { result }) {
    this.setState({
      value: result.title
    });
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value: value })

    setTimeout(() => {  
      if (this.state.value.length < 1) return this.resetSearch();

      returnSearchResults(value)
      .then((res) => {
        // console.log(res)
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
        const isMatch = result => re.test(result.title);

        this.setState({
          isLoading: false,
          results: _.filter(res, isMatch)
        });
      })
      .catch(e => console.log(e));
    }, 500); 
  }
  render() {
    const { isLoading, value, results } = this.state;
    
    return (
      <Grid>
        <Grid.Column width={12}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchContainer;

