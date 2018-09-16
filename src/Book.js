import React from 'react';
import { BookshelfChangerBtn } from './BookshelfChanger';
import PropTypes from 'prop-types';

export function Book(props) {
    let cover = '';
    //checks if the book has a thumbnail to use
    if (props.book.imageLinks) 
        cover = props.book.imageLinks.smallThumbnail;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url('${cover}')`
                    }}
                >
                      
                <BookshelfChangerBtn
                    shelf={props.shelf}
                    changeShelf={
                        (e) => {
                            //makes sure the book's shelf has actually changed before updating
                            if (props.book.shelf !== e.target.value) {
                                props.changeShelf(props.book, e.target.value);
                            }
                            console.log(props.book.shelf);
                        }
                        }
                />
                       
                </div>
            </div>
            <h3 className="book-title">{props.book.title}</h3>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};