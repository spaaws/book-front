import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';

const BookList = ({ onSelectBook }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                setBooks(response.data);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Livros</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} onClick={() => onSelectBook(book)}>
                        {book.title} - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
