import { TbTruckDelivery } from 'react-icons/tb';
import { MdPix } from 'react-icons/md';
import { Container } from '@mui/material';
import illustration from '../../assets/illustration.svg';
import { Header } from '../../components/Header';
import { Books } from '../../components/Books';
import { Footer } from '../../components/Footer';
import * as S from './styles';

export function Home() {

    return (
        <>
            <Header />
            <Container>
                <S.Hero>
                    <S.Welcome>
                        <div className='welcome__text'>
                            <h2>Seja bem-vindo(a) ao Livro<span className="emphasis">Shop</span></h2>
                            <p>Aqui você encontra os <span className="emphasis">melhores volumes</span> com os <span className="emphasis">menores preços</span> e <span className="emphasis">frete grátis.</span></p>
                        </div>
                        <img src={illustration} alt='Girl reading a book Illustration' />
                    </S.Welcome>
                    <S.Merchandising>
                        <div className='merchandising__card'>
                            <TbTruckDelivery size={50} color='var(--primary-color)' />
                            <h4>Frete grátis</h4>
                            <span>Qualquer compra</span>
                        </div>
                        <div className='merchandising__card'>
                            <MdPix size={50} color='var(--primary-color)' />
                            <h4>Pague no PIX</h4>
                            <span>Desconto 5%</span>
                        </div>
                        <div className='merchandising__card'>
                            <TbTruckDelivery size={50} color='var(--primary-color)' />
                            <h4>Frete grátis</h4>
                            <span>Qualquer compra</span>
                        </div>
                        <div className='merchandising__card'>
                            <MdPix size={50} color='var(--primary-color)' />
                            <h4>Pague no PIX</h4>
                            <span>Desconto 5%</span>
                        </div>
                        <div className='merchandising__card'>
                            <TbTruckDelivery size={50} color='var(--primary-color)' />
                            <h4>Frete grátis</h4>
                            <span>Qualquer compra</span>
                        </div>
                    </S.Merchandising>
                </S.Hero>

                <S.Content>
                    <Books genre="Suspense" />
                    <Books genre="Drama" />
                    <Books genre="Ficção" />
                </S.Content>
            </Container>
            <Footer />
        </>
    );
}
