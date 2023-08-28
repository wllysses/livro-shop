import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.2rem;
    position: relative;

    img {
        border-radius: 0.2rem;
        max-width: 140px;
        height: 190px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .150);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        
        h4 {
            white-space: nowrap;
            width: 12em;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        span {
            color: var(--secondary-color);
        }
    }

    .favorite__icon {
        position: absolute;
        top: 0;
        right: 0;
        color: red !important;
    }
`;
