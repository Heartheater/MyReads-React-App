import React, { Component } from 'react';
import { BookshelfChangerBtn } from './BookshelfChanger';


export class Book extends Component {
    /* try changing the bookshelf's state instead...
    state = {
        shelf: this.props.book.shelf,
        prevShelf: this.props.book.shelf

    }
    componentDidUpdate() {
        if (this.state.shelf !== this.state.prevShelf) {
            console.log(this.state.shelf, " is not equal to ", this.state.prevShelf);
            this.setState({ prevShelf: this.state.shelf });
        }
    }
    */
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
                        
                        <BookshelfChangerBtn
                            changeShelf={
                                (e) => {
                                    //makes sure the book's shelf has actually changed before updating
                                    if (this.props.book.shelf !== e.target.value) {
                                        this.props.changeShelf(this.props.book, e.target.value);
                                        //this.setState({ shelf: e.target.value });

                                    }

                                }
                            }
                        />

                       
                    </div>
                        

                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
        );
    }
};

