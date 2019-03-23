import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './Bookshelf'
import Bookshelf from './Bookshelf';
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books : [
      { id:1, shelf:"currentlyReading", title:"To Kill a Mockingbird", author:"Harper Lee", url: 'url("https://books.google.com.tr/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70wuMYPWQGykK6JHnmn3Gxc9C1pFliEYI6BTNJ8H58rP4fbWV3Uaj9xZ5cQfG3-ODbhaYM6mDEWHXfC3gqVlk0lS2q4Lyj5Qv0Ly-Xtba6iTmd721ZzIsHvjKBpJlvXOfBlNn5C")' },
      { id:2, shelf:"currentlyReading", title:"Ender's Game", author:"Orson Scott Card", url: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' },
      { id:3, shelf:"wantToRead", title:"1776", author:"David McCullough", url: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' },
      { id:4, shelf:"wantToRead", title:"Harry Potter and the Sorcerer's Stone", author:"J.K. Rowling", url: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' },
      { id:5, shelf:"read", title:"J.R.R. Tolkien", author:"The Hobbit", url: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' },
      { id:6, shelf:"read", title:"Oh, the Places You'll Go!", author:"Seuss", url: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' },
      { id:7, shelf:"read", title:"The Adventures of Tom Sawyer", author:"Mark Twain", url: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }
    ]
  }

  handleAddBook = (shelf,id,history) => {

    BooksAPI.get(id).then((book)=> {

      if(this.state.books.filter(b => b.id ===book.id).length > 0) {
        book = this.state.books.find(b => b.id ===book.id);
        book.shelf = shelf
      }
      else {
        book = { id:book.id, shelf:shelf, title:book.title, author:book.authors[0], url: `url(${book.imageLinks.smallThumbnail}` }
        this.setState((currState) => ({
          books : [...currState.books, book ]
        }
        ))
      }



      history.push('/')
    });


  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf
            books={this.state.books}
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )} />
        <Route
          exact path='/search' render={({ history }) => (
            <SearchBox
              onAddBook={(shelf,id) => {
                this.handleAddBook(shelf,id,history)
              }}
              shelves={this.state.books}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
