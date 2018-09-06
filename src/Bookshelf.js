import React, { Component } from 'react';
//import { Book } from './Book';
//import { bookData } from './BookData';

//creates a Bookshelf section to hold a specific division of books
export class Bookshelf extends Component {

    render() {
        return (
            <section className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                    </ol>
                </div>
            </section>
        );
    }
}
