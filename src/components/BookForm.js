import React, { useState } from 'react';
import { createBook } from '../api';

const BookForm = ({ onBookCreated }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBook({ 
                title, 
                author, 
                price
            });
            onBookCreated();
            setTitle('');
            setAuthor('');
            setPrice('');
        } catch (error) {
            console.error('Erro ao criar livro:', error);
        }
    };

    return (
        <div>
            <h2>Adicionar Novo Livro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <br />
                <label>
                    Autor:
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </label>
                <br />
                <label>
                    Preço:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Adicionar Livro</button>
            </form>
        </div>
    );
};

export default BookForm;
