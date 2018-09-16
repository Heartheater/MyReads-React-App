import React from 'react';
import PropTypes from 'prop-types';

//dropdown btn to change the reading status of a book
export function BookshelfChangerBtn (props) {
    return (
        <div className="book-shelf-changer">
            <select
                onChange={props.changeShelf}
                value={props.shelf}
            >

                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}
BookshelfChangerBtn.propTypes = {
    changeShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string
};
