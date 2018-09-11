import React from 'react';
import { BookshelfChangerBtn } from './BookshelfChanger';


export function Book (props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url('${props.book.imageLinks.smallThumbnail}')`
                    }}
                >
                        
                    <BookshelfChangerBtn
                        changeShelf={
                            (e) => {
                                //makes sure the book's shelf has actually changed before updating
                                if (props.book.shelf !== e.target.value) {
                                    props.changeShelf(props.book, e.target.value);
                                }
                            }
                        }
                    />
                       
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    );
}

