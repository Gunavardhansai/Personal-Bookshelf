import React from 'react';
import { Link } from 'react-router-dom';
import BookSearch from '../components/BookSearch';

const SearchPage = ({ addToBookshelf }) => {
  return (
    <div>
      <h1>Search for Books</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf">
        <button>My Bookshelf</button>
      </Link>
    </div>
  );
};

export default SearchPage;
