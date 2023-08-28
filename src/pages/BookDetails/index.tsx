import { useContext } from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/api";
import { Spinner } from "../../components/Spinner";
import { Header } from "../../components/Header";
import { Container, Rating } from "@mui/material";
import * as S from './styles';
import { Footer } from "../../components/Footer";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export function BookDetails() {

    const { addBook } = useContext(ShoppingCartContext);

    const { id } = useParams();

    const { data: bookData, isLoading } = useQuery(['book'], () => getBook(id!));

    if(isLoading) return <Spinner />;

    return (
        <>
            <Header />
            <Container>
                <S.Content>
                    <div className='left-side'>
                        <img src={bookData.volumeInfo.imageLinks.thumbnail} alt="" />
                    </div>

                    <div className="right-side">
                        <div className='book__data'>
                            <h2>
                                {bookData.volumeInfo.title}
                            </h2>
                            <span>{bookData.volumeInfo.authors[0]}</span>
                            <Rating name="read-only" defaultValue={5} readOnly color='primary'/>
                            <p>{!bookData.volumeInfo.description ? 'O livro não possui descrição' : bookData.volumeInfo.description}</p>
                        </div>
                        
                        <div className="action__buttons">
                            <S.Button onClick={() => addBook(bookData)}>Adicionar ao carrinho</S.Button>
                            <S.Button color='outlined' disabled>Comprar</S.Button>
                        </div>
                    </div>
                </S.Content>
            </Container>
            <Footer />
        </>
    );
}
