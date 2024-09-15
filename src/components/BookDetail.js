import React, { useState, useEffect } from 'react';
import { updateBook, deleteBook } from '../api';

const BookDetail = ({ book, onBookUpdated }) => {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [price, setPrice] = useState(book.price);

    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
        }
    }, [book]);

    const handleUpdate = async () => {
        try {
            // Converte o valor de preço para um número float
            const priceNumber = parseFloat(price);
            if (isNaN(priceNumber)) {
                console.error('Preço inválido');
                return;
            }

            await updateBook(book.id, { 
                title, 
                author, 
                price: priceNumber 
            });
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
        <div className="container">
            <h2>Detalhes do Livro</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Autor:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="author" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        className="form-control" 
                        id="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Atualizar</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Deletar</button>
            </form>
        </div>
    );
};

export default BookDetail;
