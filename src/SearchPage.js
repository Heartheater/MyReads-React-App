import React, { Component } from 'react';
//escapeRegEx escapes special characters
import escapeRegEx from 'escape-string-regexp';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';
import { Book } from './Book';


import { BooksGrid } from './BooksGrid';

export class SearchPage extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired //requires an array type
    }
    state = {
        query: ''
    }

    updateQuery(query) {
        this.setState({ query: query });
    }

    render() {
        //visibleBooks holds all the returned search results and currently visible books
        let visibleBooks = [];
        //if there's a value in the input bar
        if (this.state.query) {
            //holds the input string and escapes special characters, 'i' ignores case
            let input = new RegExp(escapeRegEx(this.state.query), 'i');
            visibleBooks = this.props.allBooks.filter((book) => {
                //filter through all books and find a match with author or title
                return input.test(book.authors) || input.test(book.title);
            });
        }
        else {//if there's no value in the input bar
            visibleBooks = [];
        }

        //sortBy allows to sort by a specific property
        visibleBooks.sort(sortBy('authors', 'title'));
        
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <a className="close-search" onClick={this.props.back}>
                        Back
                    </a>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={
                                (e) => {
                                    //when input value changes, call updateQuery and pass the new value
                                    this.updateQuery(e.target.value);
                                }}
                        />

                        {/*JSON.stringify(this.state)*/}
                    </div>
                </div>



                <div className="search-books-results">
                    <BooksGrid>
                        {visibleBooks.map((book, i) => {
                            return (
                                <li key={`result_${i}`} >
                                    <Book book={book} />
                                </li>
                            );
                        })
                        }
                    </BooksGrid>
                </div>
            </div>
        );
    }
}