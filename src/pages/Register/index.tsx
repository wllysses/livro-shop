import { Link } from 'react-router-dom';
import * as S from './styles';

export function Register() {
    return (
        <S.RegisterContainer>
            <div>
                <S.Title>Livro<span className='emphasis'>Shop</span></S.Title>
                <S.SubTitle>Preencha todas as informações</S.SubTitle>
            </div>
            <S.FormRegister>
                <S.FieldGroup>
                    <label>Nome</label>
                    <input type="text" id="useName" />
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>E-mail</label>
                    <input type="email" id="userEmail" />
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>Senha</label>
                    <input type="password" id="userPassword" />
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>Confirmar senha</label>
                    <input type="password" id="userConfirmPassword" />
                </S.FieldGroup>
                <div className="field__group">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">Li e concordo todos os termos e condições.</label>
                </div>
                <button type='submit'>Quero fazer eu cadastro</button>
            </S.FormRegister>
            <p className='register__message'>Já possui conta? <Link to="/login" className="emphasis__link">Faça login</Link></p>
        </S.RegisterContainer>
    );
}
