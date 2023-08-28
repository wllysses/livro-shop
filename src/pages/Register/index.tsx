import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '../../services/api';
import * as S from './styles';

export function Register() {

    const registerSchema = z.object({
        full_name: z.string().nonempty('Preenchimento obrigatório.'),
        email: z.string().nonempty('Preenchimento obrigatório.').email('Formato de e-mail inválido.'),
        password: z.string().nonempty('Preencimento obrigatório.').min(5, 'Mínimo 5 caracteres.'),
        confirm_password: z.string().nonempty('Preencimento obrigatório.').min(5, 'Mínimo 5 caracteres.'),
        terms: z.literal(true, {
            errorMap: () => ({ message: "Você deve aceitar os termos e condições." }),
        })
    }).refine((data) => data.password === data.confirm_password, {
        path: ['confirm_password'],
        message: 'As senhas precisam ser iguais.'
    });

    type RegisterSchema = z.infer<typeof registerSchema>;

    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    });

    async function handleRegisterUser(data: RegisterSchema) {

        try {
            const fetchData = await registerUser(data);

            alert(fetchData.message);
            reset();
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <S.RegisterContainer>
            <div>
                <S.Title>Livro<span className='emphasis'>Shop</span></S.Title>
                <S.SubTitle>Preencha todas as informações</S.SubTitle>
            </div>
            <S.FormRegister onSubmit={handleSubmit(handleRegisterUser)}>
                <S.FieldGroup>
                    <label>Nome</label>
                    <input type="text" id="useName" {...register('full_name')} />
                    {errors.full_name && <span>{errors.full_name.message}</span>}
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>E-mail</label>
                    <input type="email" id="userEmail" {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>Senha</label>
                    <input type="password" id="userPassword" {...register('password')} />
                    {errors.password && <span>{errors.password.message}</span>}
                </S.FieldGroup>
                <S.FieldGroup>
                    <label>Confirmar senha</label>
                    <input type="password" id="userConfirmPassword" {...register('confirm_password')} />
                    {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                </S.FieldGroup>
                <div>
                    <div className='className="field__group"'>
                        <input type="checkbox" id="terms" {...register('terms')} />
                        <label htmlFor="terms">Li e concordo todos os termos e condições.</label>
                    </div>
                    {errors.terms && <span>{errors.terms.message}</span>}
                </div>
                <button type='submit'>Quero fazer eu cadastro</button>
            </S.FormRegister>
            <p className='register__message'>Já possui conta? <Link to="/login" className="emphasis__link">Faça login</Link></p>
        </S.RegisterContainer>
    );
}
