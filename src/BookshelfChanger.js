import React, { Component } from 'react';

//dropdown btn to change the reading status of a book
export class BookshelfChangerBtn extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={this.props.changeShelf}
                    value="none"
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
}
