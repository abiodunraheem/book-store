import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'The HolySpirit',
      author: 'Scot Micheal',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'City story',
      author: 'Adams Smit',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
