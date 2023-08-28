import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { GrFavorite } from 'react-icons/gr';
import { Container } from '@mui/material';
import { Dropdown } from '../Dropdown';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import * as S from './styles';

export function Header() {

    const { books } = useContext(ShoppingCartContext);

    const user = JSON.parse(localStorage.getItem('USER_DATA')!);
    const accessToken = localStorage.getItem('USER_TOKEN')!;

    const navigate = useNavigate();

    return (
        <S.HeaderContainer>
            <Container>
                <S.HeaderContent>
                    <Link to="/">
                        <S.Title>
                            Livro<span className='emphasis'>Shop</span>
                        </S.Title>
                    </Link>
                    {/* <S.InputSearch>
                        <input type="text" id='search' placeholder='Pesquise por um título, autor ou gênero' />
                        <AiOutlineSearch size={20} />
                    </S.InputSearch> */}
                    <S.Menu>
                        <button 
                            className="favorites" 
                            onClick={() => navigate('/favoritos')}
                            disabled={accessToken === null}
                        >
                            <GrFavorite />
                            <span>Meus favoritos</span>
                        </button>
                        {
                            localStorage.getItem('USER_TOKEN') !== null
                                ? <Dropdown name={user.name} />
                                : <S.Button onClick={() => navigate('/login')}>Entrar</S.Button>
                        }
                        <button
                            className="shopping__cart"
                            onClick={() => navigate('/carrinho-compras')}
                            disabled={accessToken === null}
                        >
                            <AiOutlineShoppingCart size={25} />
                            <span>{books?.length}</span>
                        </button>
                    </S.Menu>
                </S.HeaderContent>
            </Container>
        </S.HeaderContainer>
    );
}
