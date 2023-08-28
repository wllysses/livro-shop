import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const Title = styled.h2``;

export const ShoppingCartContainer = styled.div`
    display: flex;
    gap: 1rem;

    .left-side {
        max-width: 700px;
        width: 100%;
        padding: 1rem;
        height: 500px;
        border: 1px solid #cccccc;
        overflow: auto;

        .products {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &:last-child {
                border: none;
            }

            .product {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #cccccc;
                padding-bottom: 1rem;

                h4 {
                    white-space: nowrap;
                    width: 13em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                img {
                    max-width: 60px;
                }
            }
        }
    }

    .right-side {
        flex: 1;
        padding: 1rem;
        border: 1px solid #cccccc;
        height: 200px;

        h3 {
            border-bottom: 1px solid #cccccc;
            padding-bottom: 0.3rem;
        }

        .details {
            margin: 1rem 0;
            width: 100%;

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        button {
            width: 100%;
            padding: 0.5rem;
            background-color: var(--primary-color);
            color: var(--white-color);
            font-family: 'Poppins', sans-serif;
            border: none;
            outline: none;
            border-radius: 0.3rem;
        }
    }
`;