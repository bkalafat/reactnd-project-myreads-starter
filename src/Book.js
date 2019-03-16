import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={this.props.style}></div>
          <div className="book-shelf-changer" >
            <select >
              <option value="move" disabled>Move to...</option>
              <option selected={this.props.shelf === "Currently Reading"} value="currentlyReading">Currently Reading</option>
              <option selected={this.props.shelf === "Want to Read"} value="wantToRead">Want to Read</option>
              <option selected={this.props.shelf === "Read"} value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}

export default Book