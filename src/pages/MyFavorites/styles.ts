import { styled } from "styled-components";

export const Content = styled.div`
    margin: 2rem 0;
    
    .favorites__list {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

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
`;
