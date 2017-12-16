import React, { Component } from 'react';
import { Search, Grid, Image } from 'semantic-ui-react';
import _ from 'lodash';
import { returnSearchResults } from '../../giphy';
import PageNumbers from './PageNumbers';


const ITEM_PAGE_COUNT = 15;

const GiphySearchResultWrapper = (params) => (
  <div className={params.className} onClick={e => params.onClick(e)}>
    {params.children}
  </div>
)

const resultRenderer = (gif) => (
  <div>
    { gif.title }
    <Image src={gif.image} />
  </div>
)
  

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      pageCount: 0,
      displayPageNumbers: false
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
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
        const isMatch = result => re.test(result.title);
        
        const removeDuplicates = _.uniqBy(res, obj => obj.id);
        // console.log(removeDuplicates);
        this.setState({
          isLoading: false,
          results: _.filter(removeDuplicates, isMatch)
        });
        this.generatePageNumbers()
      })
      .catch(e => console.log(e));

    }, 750);
  }

  generatePageNumbers() {
    setTimeout(() => {
      const pageCount = Math.ceil(this.state.results.length/ ITEM_PAGE_COUNT);
      this.setState({
        displayPageNumbers: true,
        pageCount
      });
      console.log(pageCount);
    }, 300);
  }
  render() {
    const { isLoading, value, results, pageCount, displayPageNumbers } = this.state;
    const transformedResults = results.map(obj=> (
      {
        childKey: obj.id,
        as: GiphySearchResultWrapper,
        title: obj.title,
        image: obj.images.fixed_height_still.url,
        shortDesc: obj.shortDescription || '',
        fullDesc: obj.fullDescription || ''
      })).slice(0, 15);
    return (
      <Grid className="ui segment centered" centered columns={1}>
        <Grid.Column stretched textAlign={'center'} width={16}>

          
          { displayPageNumbers ? 
            <PageNumbers pages={pageCount} />
            :
            ''
          }
          
          { results.length > 0 ? 
            <div className="results-count">
              found: <h4>{results.length}</h4>
            </div>
            : 
            ''
          }

          { results.length > 14 ?
          <div>
            <div className="next">
              <h4>More</h4>
            </div>
          </div>
            :
            ''
          }
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={transformedResults}
            resultRenderer={resultRenderer}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchContainer;

