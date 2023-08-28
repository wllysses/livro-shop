import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authUserLogin } from '../../services/api';
import * as S from './styles';

export function Login() {

    const navigate = useNavigate();

    const authLoginSchema = z.object({
        email: z.string().nonempty('Preenchimento obrigatório.').email('Formato de e-mail inválido.'),
        password: z.string().nonempty('Preenchimento obrigatório').min(5, 'Mínimo 5 caracteres.')
    });

    type AuthLoginSchema = z.infer<typeof authLoginSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<AuthLoginSchema>({
        resolver: zodResolver(authLoginSchema)
    });

    async function userLogin(data: AuthLoginSchema) {
        
        try {
            const fetchData = await authUserLogin(data);

            alert(fetchData.message);
            localStorage.setItem('USER_TOKEN', fetchData.token);
            localStorage.setItem('USER_DATA', JSON.stringify(fetchData.user));
            navigate('/');
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <S.LoginContainer>
            <div>
                <S.Title>Livro<span className='emphasis'>Shop</span></S.Title>
                <S.SubTitle>Faça login com a sua conta</S.SubTitle>
            </div>
            <S.FormLogin onSubmit={handleSubmit(userLogin)}>
                <S.FieldGroup>
                    <label>E-mail</label>
                    <input type="email" id="userEmail" { ...register('email') } />
                    { errors.email && <span>{errors.email.message}</span> }
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>Senha</label>
                    <input type="password" id="userPassword" { ...register('password') } />
                    { errors.password && <span>{errors.password.message}</span> }
                </S.FieldGroup>
                <a href="#" className='recovery__password'>Esqueceu a senha?</a>
                <button type='submit'>Entrar</button>
            </S.FormLogin>
            <p className='register__message'>Não possui conta? <Link to="/register" className="emphasis__link">Cadastre-se</Link></p>
        </S.LoginContainer>
    );
}
