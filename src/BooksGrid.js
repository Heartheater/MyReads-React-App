import React from 'react';

export function BooksGrid (props) {
    return (
        <ol className="books-grid">
            {props.children}
        </ol>
    );
}
