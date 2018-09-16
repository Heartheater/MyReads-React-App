import React, { Component } from 'react';
import { BookshelfChangerBtn } from './BookshelfChanger';
import PropTypes from 'prop-types';
import { BookInfo } from './BookInfo';

export class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    state = {
        detailsHidden: false
    }

    render() {
        let cover = '';
        //checks if the book has a thumbnail to use
        if (this.props.book.imageLinks)
            cover = this.props.book.imageLinks.smallThumbnail;

        return (
            <div className="book">
                <div className="book-contents">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                backgroundImage: `url('${cover}')`
                            }}
                        >
                            <BookshelfChangerBtn
                                shelf={this.props.shelf}
                                changeShelf={
                                    (e) => {
                                        //makes sure the book's shelf has actually changed before updating
                                        if (this.props.book.shelf !== e.target.value) {
                                            this.props.changeShelf(this.props.book, e.target.value);
                                        }
                                    }
                                }
                            />
 

                        </div>
                    </div>
                    
                    {/*button to view more book info by toggling display*/}
                    <button className="toggle-book-info"
                        onClick={() => {
                            //finds the specific book by it's id
                            let thisBook = document.getElementById(`book-${this.props.book.id}`),
                                authorAndTitle = document.getElementById(`author-title-${this.props.book.id}`);
                            thisBook.classList.toggle("hidden");
                            authorAndTitle.classList.toggle("hidden");
                            this.setState({ detailsHidden: !this.state.detailsHidden });
                        }}
                    >
                        {"◄"}
                    </button>
                
                    <BookInfo
                        book={this.props.book}
                        shelf={this.props.shelf}
                    />
                </div>
                <div className="author-title-wrapper" id={`author-title-${this.props.book.id}`}>
                    <h3 className="book-title">{this.props.book.title}</h3>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </div>
        );
    }

}

