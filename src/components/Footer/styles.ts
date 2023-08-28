import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 1rem;
    background-color: var(--primary-color);
    color: var(--white-color);

    .footer__content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-weight: 400;

            .emphasis {
                font-weight: 600;
            }
        }
    }
`;