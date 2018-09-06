import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';
import { Book } from './Book';
export class HomePage extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.allBooks
                                            .filter(book => {
                                                return book.shelf === 'currentlyReading'
                                            })
                                            .map((book, i) => {
                                                return (
                                                    <li key={`${book.shelf}_book_${i}`} >
                                                        <Book
                                                            book={book}
                                                            changeShelf={this.props.changeShelf}
                                                        />

                                                    </li>
                                                );
                                        })}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.allBooks
                                        .filter(book => {
                                            return book.shelf === 'wantToRead'
                                        })
                                        .map((book, i) => {
                                            return (
                                                <li key={`${book.shelf}_book_${i}`} >
                                                    <Book
                                                        book={book}
                                                        changeShelf={this.props.changeShelf}
                                                    />

                                                </li>
                                            );
                                        })}
                                </ol>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.allBooks
                                        .filter(book => {
                                            return book.shelf === 'read'
                                        })
                                        .map((book, i) => {
                                            return (
                                                <li key={`${book.shelf}_book_${i}`} >
                                                    <Book
                                                        book={book}
                                                        changeShelf={this.props.changeShelf}
                                                    />

                                                </li>
                                            );
                                        })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
            );
    }
}