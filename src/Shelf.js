import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {

  render() {

    const {books, shelf} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} shelf={shelf} style={book.style} />
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
}

export default Shelf