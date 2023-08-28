import styled from 'styled-components';

export const RegisterContainer = styled.div`
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

        a {
            color: var(--primary-color);
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

export const FormRegister = styled.form`
 width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .field__group {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    button {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background-color: var(--primary-color);
        color: var(--white-color);
        border-radius: 0.3rem;
        border: none;
        outline: none;
        font-family: var(--font-primary);

        &:hover {
            background-color: #ef4444;
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
