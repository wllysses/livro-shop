import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrTrash } from "react-icons/gr";
import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { formatPrice } from '../../functions/formatPrice';
import * as S from './styles';


export function ShoppingCart() {

    const { books, removeBook } = useContext(ShoppingCartContext);
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem('USER_TOKEN') === null && navigate('/');
    }, []);

    
    useEffect(() => {
        function calculateTotalPrice() {
            const total = books.reduce((total, book) => {
                return total + book.saleInfo.listPrice.amount;
            }, 0);
            setTotal(total);
        }
        calculateTotalPrice()
    }, [total, books]);

    return (
        <>
            <Header />
            <Container>
                <S.Content>
                    <S.Title>Carrinho de compras</S.Title>
                    <S.ShoppingCartContainer>
                        <div className="left-side">
                            <ul className='products'>
                                { !books.length && <span>Carrinho vazio</span> }
                                {
                                    books &&
                                    books.map((book) => (
                                        <li key={book.id} className="product">
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Capa do livro: ${book.volumeInfo.title}`} />
                                            <h4 title={book.volumeInfo.title}>{book.volumeInfo.title}</h4>
                                            <h4>{formatPrice(book.saleInfo.listPrice.amount)}</h4>
                                            <GrTrash cursor='pointer' onClick={() => removeBook(book.id)}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="right-side">
                            <h3>Detalhes da compra</h3>
                            <ul className='details'>
                                <li>
                                    <span><strong>Total:</strong></span>
                                    <span>{formatPrice(total)}</span>
                                </li>
                                <li>
                                    <span><strong>Frete:</strong></span>
                                    <span>Grátis</span>
                                </li>
                            </ul>
                            <button>Finalizar compra</button>
                        </div>
                    </S.ShoppingCartContainer>
                </S.Content>
            </Container>
        </>
    );
}
