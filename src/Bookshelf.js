import React from 'react';
import { BooksGrid } from './BooksGrid';

//creates a Bookshelf section to hold a specific division of books
export function Bookshelf (props) {
    return (
        <section className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <BooksGrid>
                    {props.children}
                </BooksGrid>
            </div>
        </section>
    );
}
