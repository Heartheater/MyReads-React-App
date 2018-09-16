import React from 'react';
import './App.css';
import { SearchPage } from './SearchPage';
import { HomePage } from './HomePage';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

export default class BooksApp extends React.Component {
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
    changeShelf = (book, shelf) => {
        console.log(`Moving "${book.title}" to ${shelf}`);
        BooksAPI.update(book, shelf);
        //this re-renders the app
        BooksAPI.getAll()
            .then(list => {
                //setState only queues a change so it might not render until a few
                //books have changed shelves
                this.setState({ allBooks: list });
            });
        return book.shelf = shelf;
    }

    //search for books
    searchBooks = (query, maxResults) => {
        console.log(`Searching ${query}`);
        BooksAPI.search(query, maxResults);
    }
    

    render() {
        return (
            <div className='app'>                        

                {/*renders homepage if the url's path has nothing but '/' in it*/ }
                <Route exact path='/' render={() => {
                    return (
                    <HomePage
                        allBooks={this.state.allBooks}
                        changeShelf={this.changeShelf}
                    />);
                }}
                />

                {/*renders searchpage if the url's path is '/search'*/}
                <Route exact path='/search' render={({ history }) => {
                    return (
                        <SearchPage
                            shelvedBooks={this.state.allBooks}
                            search={this.searchBooks}
                            addShelf={this.changeShelf}
                            back={() => history.push('/')}
                        />
                    );
                }}
                />

            </div>
        );
    }
}

