import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { SearchPage } from './SearchPage';
import { HomePage } from './HomePage';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

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
    }

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
                            allBooks={this.state.allBooks}
                            search={this.searchBooks}
                            back={() => history.push('/')}
                        />
                    );
                }}
                />

            </div>
        );
    }
}

//exports BooksApp under the name "defualt"
//eqivalent to   "export {BooksApp as default}"
export { BooksApp as default };