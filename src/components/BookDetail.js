import React, { useState, useEffect } from 'react';
import { getBookById, updateBook, deleteBook } from '../api';

const BookDetail = ({ book, onBookUpdated }) => {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [publishedYear, setPublishedYear] = useState(book.published_year);

    useEffect(() => {
        setTitle(book.title);
        setAuthor(book.author);
        setPublishedYear(book.published_year);
    }, [book]);

    const handleUpdate = async () => {
        try {
            await updateBook(book.id, { title, author, published_year: publishedYear });
            onBookUpdated();
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteBook(book.id);
            onBookUpdated();
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
    };

    return (
        <div>
            <h2>Detalhes do Livro</h2>
            <label>
                Título:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                Autor:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <br />
            <label>
                Ano de Publicação:
                <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} />
            </label>
            <br />
            <button onClick={handleUpdate}>Atualizar</button>
            <button onClick={handleDelete}>Deletar</button>
        </div>
    );
};

export default BookDetail;
