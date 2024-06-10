import React from 'react';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
