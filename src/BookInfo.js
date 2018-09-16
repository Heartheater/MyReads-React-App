import React from 'react';

export function BookInfo(props) {
    return (
        <div className="book-info-wrapper hidden" id={`book-${props.book.id}`}>
            <h3 className="book-info-title">{props.book.title}</h3>
            <div className="book-info-authors">{props.book.authors}</div>
            <div className="book-desc">{props.book.description}</div>
            <div className="book-details">
                <a role="link" href={props.book.infoLink} target="_blank">
                    More Details
                </a>
            </div>
        </div>
    );
}

