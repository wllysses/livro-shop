import { Container } from '@mui/material';
import * as S from './styles';

export function Footer() {
    return (
        <S.FooterContainer>
            <Container>
                <div className="footer__content">
                    <h2>Livro<span className="emphasis">Shop</span></h2>
                    <span>Todos os direitos reservados</span>
                </div>
            </Container>
        </S.FooterContainer>
    );
}
