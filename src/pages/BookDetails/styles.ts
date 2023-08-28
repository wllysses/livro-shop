import styled from 'styled-components';

export const Content = styled.div`
    margin: 2rem 0;
    display: flex;
    gap: 2rem;
    min-height: 80vh;

    .left-side {
        max-width: 350px;
        width: 100%;

        img {
            width: 100%;
            border-radius: 0.3rem;
        }
    }

    .right-side {
        flex: 1;

        .book__data {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            
            p {
                margin-top: 0.5rem;
                text-align: justify;
            }
        }

        .action__buttons {
            margin-top: 2.5rem;
            display: flex;
            gap: 1rem;
        }
    }
`;

export const Button = styled.button`
    flex: 1;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 0.7rem;
    border-radius: 0.2rem;
    outline: none;
    border: ${props => props.color === 'outlined' ? '1px solid var(--primary-color)' : 'none'};
    background-color: ${props => props.color === 'outlined' ? 'var(--white-color)' : 'var(--primary-color)'};
    color: ${props => props.color === 'outlined' ? 'var(--primary-color)' : 'var(--white-color)'};
`;