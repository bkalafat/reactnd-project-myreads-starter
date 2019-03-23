import React, { Component } from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

class BookShelf extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books : this.props.books,
      query: ''
    };
  }

  handleShelfChange = (shelf,id) => {
    var foundIndex = this.state.books.findIndex(x => x.id === id);
    this.setState(currState => currState.books[foundIndex].shelf = shelf
    )
  };

  render() {

    const currBooks = this.state.books.filter(book => book.shelf === "currentlyReading");
    const wantBooks = this.state.books.filter(book => book.shelf === "wantToRead");
    const readBooks = this.state.books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf onShelfChange={this.handleShelfChange} books={currBooks} title="Currently Reading" value="currentlyReading" />
                <Shelf onShelfChange={this.handleShelfChange} books={wantBooks} title="Want to Read" value="wantToRead" />
                <Shelf onShelfChange={this.handleShelfChange} books={readBooks} title="Read" value="read" />
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'>
              <button>Add a book</button>
            </Link>
            </div>

          </div>
    )
  }
}

export default BookShelf