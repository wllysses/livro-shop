import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    .register__message {
        text-align: center;
        .emphasis__link {
            color: var(--primary-color) !important;
        }
    }
`;

export const Title = styled.h1`
    font-weight: 400;

    .emphasis {
        font-weight: 600;
        color: var(--primary-color);
    }
`;

export const SubTitle = styled.p``;

export const FormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    button {
        padding: 0.75rem;
        background-color: var(--primary-color);
        color: var(--white-color);
        border-radius: 0.3rem;
        border: none;
        outline: none;

        &:hover {
            background-color: #ef4444;
        }
    }

    .recovery__password {
        align-self: flex-end;

        &:hover {
            color: var(--primary-color);
        }
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;

    input {
        padding: 0.75rem;
        border: 1px solid var(--secondary-color);
        border-radius: 0.2rem;
    }
`;