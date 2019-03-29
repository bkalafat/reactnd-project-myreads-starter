import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  handleChange = event => {
    event.preventDefault();
    BooksAPI.update(this.props.book, event.target.value).then()
    this.props.onShelfChange();
  };

  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.hasOwnProperty('imageLinks') ? `url(${this.props.book.imageLinks.smallThumbnail}`:''}}></div>
          <div className="book-shelf-changer" >
            <select onChange={this.handleChange} value={this.props.book.hasOwnProperty('shelf') ? this.props.book.shelf : 'none'} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book