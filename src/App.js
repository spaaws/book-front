import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';

const App = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [booksUpdated, setBooksUpdated] = useState(false);

    const handleSelectBook = (book) => {
        setSelectedBook(book);
    };

    const handleBookUpdated = () => {
        setSelectedBook(null);
        setBooksUpdated(!booksUpdated);
    };

    return (
        <div>
            <h1>Biblioteca de Livros</h1>
            <BookForm onBookCreated={handleBookUpdated} />
            <BookList onSelectBook={handleSelectBook} />
            {selectedBook && (
                <BookDetail book={selectedBook} onBookUpdated={handleBookUpdated} />
            )}
        </div>
    );
};

export default App;
