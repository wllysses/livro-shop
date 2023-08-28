import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrTrash } from "react-icons/gr";
import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { formatPrice } from "../../functions/formatPrice";
import * as S from './styles';

export function MyFavorites() {

    const navigate = useNavigate();

    const { favorites, removeBookOnFavorites } = useContext(FavoritesContext);

    useEffect(() => {
        localStorage.getItem('USER_TOKEN') === null && navigate('/');
    }, []);

    return (
        <>
            <Header />
            <Container>
                <S.Content>
                    <h2>Meus favoritos</h2>

                    <ul className="favorites__list">
                        { !favorites.length && <span>Lista de favoritos vazia</span> }
                        {
                            favorites &&
                            favorites.map((favorite) => (
                                <li key={favorite.id} className="product">
                                    <img src={favorite.volumeInfo.imageLinks.thumbnail} alt={`Capa do livro: ${favorite.volumeInfo.title}`} />
                                    <h4 title={favorite.volumeInfo.title}>{favorite.volumeInfo.title}</h4>
                                    <h4>{formatPrice(favorite.saleInfo.listPrice.amount)}</h4>
                                    <GrTrash size={20} cursor='pointer' onClick={() => removeBookOnFavorites(favorite.id)} />
                                </li>
                            ))
                        }
                    </ul>
                </S.Content>
            </Container>
        </>
    );
}
