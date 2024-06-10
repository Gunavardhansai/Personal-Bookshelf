import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Bookshelf from './pages/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SearchPage addToBookshelf={addToBookshelf} />
        </Route>
        <Route path="/bookshelf">
          <Bookshelf bookshelf={bookshelf} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
