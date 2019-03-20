import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shelf : this.props.shelf
    };
  }

  handleChange = event => {

    event.preventDefault();
    this.props.onShelfChange(event.target.value,this.props.id);
  };

  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={this.props.style}></div>
          <div className="book-shelf-changer" >
            <select onChange={this.handleChange} value = {this.props.shelf} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
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
  style: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book