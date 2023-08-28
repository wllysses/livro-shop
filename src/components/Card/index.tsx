import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { Rating } from '@mui/material';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Book } from '../../interfaces';
import * as S from './styles';

export function Card(props: { book: Book }) {

    const { addBookInFavorites } = useContext(FavoritesContext);

    return (
        <S.CardContainer>
            <Link to={`/livros/${props.book.id}`}>
                <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={`Capa do livro: ${props.book.volumeInfo.title}`} />
            </Link>
            <div>
                <h4 title={props.book.volumeInfo.title}>{props.book.volumeInfo.title}</h4>
                <span>Author</span>
                <Rating name="read-only" defaultValue={5} readOnly color='primary' />
            </div>

            <GrFavorite className="favorite__icon" cursor="pointer" onClick={() => addBookInFavorites(props.book)} />
        </S.CardContainer>
    );
}
