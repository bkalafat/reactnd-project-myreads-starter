import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import './Bookshelf'
import Bookshelf from './Bookshelf';
import SearchBox from './SearchBox';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBox />
        ) : (
          <Bookshelf />
        )}
      </div>
    )
  }
}

export default BooksApp
