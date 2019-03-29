import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './Bookshelf'
import Bookshelf from './Bookshelf';
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    books: []
  }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books: books
        }))
      })
  }

  componentDidUpdate() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books: books
        }))
      })
  }

  handleAddBook = (history) => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books: books
        }))
      })
      history.push('/')
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf
            books={this.state.books}
          />
        )} />
        <Route
          exact path='/search' render={({ history }) => (
            <SearchBox
              onAddBook={() => {
                this.handleAddBook(history)
              }}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
