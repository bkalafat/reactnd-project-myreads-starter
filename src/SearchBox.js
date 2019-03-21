import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books : []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleShelfChange = (shelf,id) => {
  };

  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
            {

              this.state.books.map((book) => (
                <li key={book.id}>
                  <Book onShelfChange={this.handleShelfChange} title={book.title} author={book.authors[0]} id={book.id} shelf="currentlyReading" url={`url(${book.imageLinks.smallThumbnail}`} />
                </li>
              ))
            }


          </ol>
            </div>
          </div>
    )
  }
}

export default SearchBox