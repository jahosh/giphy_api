import React from 'react';
import { Search } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <Search
      loading={true}
      onResultSelect={this.handleResultSelect}
      onSearchChange={this.handleSearchChange}
      results={[]}
      value={''}
      {...this.props}
      />
  );
};

export default SearchBar;