import React from 'react';
import PropTypes from 'prop-types';
import { Bookshelf } from './Bookshelf';
import { Book } from './Book';
import { Link } from 'react-router-dom';

export function HomePage(props) {
    return (
        <div className="list-books">
            <header className="list-books-title">
                <h1>MyReads</h1>
            </header>
            <main className="list-books-content">
                <Bookshelf shelfTitle="Currently Reading">
                    {props.allBooks
                            .filter(book => book.shelf === 'currentlyReading')
                            .map((book, i) => {
                                return (
                                    <li key={`${book.shelf}_book_${i}`} >
                                        <Book
                                            book={book}
                                            shelf={book.shelf}
                                            changeShelf={props.changeShelf}
                                        />
                                    </li>
                                );
                        })}
                </Bookshelf>

                <Bookshelf shelfTitle="Want to Read">
                    {props.allBooks
                        .filter(book => book.shelf === 'wantToRead')
                        .map((book, i) => {
                            return (
                                <li key={`${book.shelf}_book_${i}`} >
                                    <Book
                                        book={book}
                                        shelf={book.shelf}
                                        changeShelf={props.changeShelf}
                                    />

                                </li>
                            );
                        })}
                </Bookshelf>

                <Bookshelf shelfTitle="Read">
                    {props.allBooks
                        .filter(book => book.shelf === 'read')
                        .map((book, i) => {
                            return (
                                <li key={`${book.shelf}_book_${i}`} >
                                    <Book
                                        book={book}
                                        shelf={book.shelf}
                                        changeShelf={props.changeShelf}
                                    />

                                </li>
                            );
                        })}
                </Bookshelf>
            </main>
            <div className="open-search" aria-label="search books">
                <Link to='/search' role="link">
                    Add a book
                </Link>
            </div>
        </div>
        );
}
HomePage.propTypes = {
    allBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};