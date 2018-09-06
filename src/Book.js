import React, { Component } from 'react';
import { BookshelfChangerBtn } from './BookshelfChanger';


export class Book extends Component {
    render() {
        return (
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage: `url('${this.props.book.imageLinks.smallThumbnail}')`
                        }}
                    >
                        {/*<BookshelfChangerBtn changeShelf={this.props.changeShelf} />*/}
                        <div className="book-shelf-changer">
                            <select
                                onChange={
                                    () => {
                                        this.props.changeShelf(this.props.book, this.props.book.shelf)
                                    }
                                }
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                        

                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
        );
    }
};

