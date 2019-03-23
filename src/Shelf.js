import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {


  handleShelfChange = (shelf,id) => {
    this.props.onShelfChange(shelf,id);
  };

  render() {

    const books = this.props.books;
    const title = this.props.title;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book onShelfChange={this.handleShelfChange} title={book.title} author={book.author} id={book.id} shelf={this.props.value} url={book.url} />
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
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Shelf