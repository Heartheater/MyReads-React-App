import React, { Component } from 'react';
import escapeRegEx from 'escape-string-regexp';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';
import { Book } from './Book';
import { search } from './BooksAPI';
import { BooksGrid } from './BooksGrid';

export class SearchPage extends Component {
    static propTypes = {
        addShelf: PropTypes.func.isRequired,
        back: PropTypes.func.isRequired,
        search: PropTypes.func.isRequired
    }
    state = {
        query: '',
        matchedBooks: [],
        foundResults: true
    }

    updateQuery(query) {
        this.setState({ query: query });
        //calls searchBooks when the input field changes
        return this.searchBooks(query);
    }

    searchBooks = (query) => {
        //return an empty array if query is empty
        if (query === " " || !query) {
            return this.setState({ matchedBooks: [], foundResults: false });
        }
        //escape special characters
        query = escapeRegEx(query).toLowerCase();

        return search(query)
            .then(match => {
                if (!match.error && query) {
                    match.sort(sortBy('authors', 'title'));
                    return this.setState({ matchedBooks: match, foundResults: true });
                }
                else {
                    //if the search gave an error return empty array
                    return this.setState({ matchedBooks: [], foundResults: false });
                }
            })
            .catch(err => console.error(`Error searching for book: ${err}`));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.back} role="link">
                        Back
                    </a>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={
                                (e) => {
                                    //when input value changes, call updateQuery and pass the new value
                                    return this.updateQuery(e.target.value);
                                }}
                            aria-label="search for books"

                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <BooksGrid>
                        {//first checks if there are any results to show
                            this.state.foundResults ?
                                //map through array of results
                                this.state.matchedBooks.map((book, i) => {
                                    //set default bookshelf
                                    book.shelf = "none";

                                    //map through already shelved books to find any matching books
                                    this.props.shelvedBooks.map(shelvedBook => {
                                        if (shelvedBook.id === book.id) {
                                            book.shelf = shelvedBook.shelf;
                                        }
                                        return book.shelf;
                                    });

                                    return (
                                        <li key={`searchResult_${i}`} >
                                            <Book
                                                book={book}
                                                changeShelf={this.props.addShelf}
                                                shelf={book.shelf}
                                            />
                                        </li>
                                    );
                                })
                                //or if there are no results
                            : <li><p id="no-results"> No Results Found </p></li>
                         }
                        </BooksGrid>
                </div>
            </div>
        );
    }
}