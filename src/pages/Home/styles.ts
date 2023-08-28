import styled from 'styled-components';

export const Hero = styled.section`
    margin-top: 1rem;
    width: 100%;
    height: 40vh;
`;

export const Welcome = styled.div`
    height: 200px;
    padding: 0.5rem;
    background-color: var(--light-gray-color);
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .welcome__text {
        h2 {
            font-size: 2rem;
            font-weight: 300;
        }

        p {
            font-size: 0.8rem;
        }
        .emphasis {
            color: var(--primary-color);
            font-weight: 600;
        }

    }

    img {
        max-width: 150px;
        margin-top: -2rem;
        margin-left: -1.5rem;
    }
`;

export const Merchandising = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .merchandising__card {
        width: 180px;
        height: 180px;
        border: 1px solid var(--secondary-color);
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4 {
            font-size: 1rem;
            font-weight: 600;
        }

        span {
            font-size: 0.75rem;
            color: #9F9F9F;
        }
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 3rem 0;
`;