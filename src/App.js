import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
//import { SearchPage } from './SearchPage';
import { HomePage } from './HomePage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
    state = {
        showSearchPage: false,
        allBooks: []
    }

    //get list of books
    componentDidMount() {
        BooksAPI.getAll()
            .then(list => {
                this.setState({ allBooks: list });
            })
            .catch(err => console.error("Error fetching list of books: ", err));
    }

    //update a book's reading status
    changeShelf(book, shelf) {
        console.log(`Moving "${book.title}" to ${shelf}`);
        //BooksAPI.update(book, shelf);
    }


    render() {
        return (
            <div className="app">
                {/*<SearchPage />*/}
                <HomePage
                    allBooks={this.state.allBooks}
                    changeShelf={this.changeShelf}
                />
                {console.log(this.state.allBooks)}
            </div>
        );
    }
}

//exports BooksApp under the name "defualt"
//eqivalent to   "export {BooksApp as default}"
export { BooksApp as default };