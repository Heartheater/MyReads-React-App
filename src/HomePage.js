import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';
import { Book } from './Book';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf shelfTitle="Currently Reading">
                        {this.props.allBooks
                                .filter(book => book.shelf === 'currentlyReading')
                                .map((book, i) => {
                                    return (
                                        <li key={`${book.shelf}_book_${i}`} >
                                            <Book
                                                book={book}
                                                changeShelf={this.props.changeShelf}
                                                showButton="true"
                                            />
                                        </li>
                                    );
                            })}
                    </Bookshelf>

                    <Bookshelf shelfTitle="Want to Read">
                        {this.props.allBooks
                            .filter(book => book.shelf === 'wantToRead')
                            .map((book, i) => {
                                return (
                                    <li key={`${book.shelf}_book_${i}`} >
                                        <Book
                                            book={book}
                                            changeShelf={this.props.changeShelf}
                                            showButton="true"
                                        />

                                    </li>
                                );
                            })}
                    </Bookshelf>

                    <Bookshelf shelfTitle="Read">
                        {this.props.allBooks
                            .filter(book => book.shelf === 'read')
                            .map((book, i) => {
                                return (
                                    <li key={`${book.shelf}_book_${i}`} >
                                        <Book
                                            book={book}
                                            changeShelf={this.props.changeShelf}
                                            showButton="true"
                                        />

                                    </li>
                                );
                            })}
                    </Bookshelf>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        Add a book
                    </Link>
                </div>
            </div>
            );
    }
}