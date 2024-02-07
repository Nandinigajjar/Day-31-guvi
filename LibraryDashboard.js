
import React from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const LibraryDashboard = () => {
  return (
    <div>
      <h1>Library Management System</h1>
      <div>
        <h2>Books</h2>
        <BookForm />
      </div>
      <div>
        <h2>Authors</h2>
        <AuthorForm />
      </div>
    </div>
  );
};

export default LibraryDashboard;
