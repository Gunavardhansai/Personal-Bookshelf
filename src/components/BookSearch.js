import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      fetchBooks(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by book name..."
      />
      <div className="results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
