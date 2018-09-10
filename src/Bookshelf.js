import React, { Component } from 'react';
//import { Book } from './Book';
//import { bookData } from './BookData';
import { BooksGrid } from './BooksGrid';

//creates a Bookshelf section to hold a specific division of books
export class Bookshelf extends Component {
    render() {
        return (
            <section className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksGrid>
                        {this.props.children}
                    </BooksGrid>
                </div>
            </section>
        );
    }
}
