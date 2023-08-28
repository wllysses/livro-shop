import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1rem;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-weight: 400;

    .emphasis {
        font-weight: 600;
        color: var(--primary-color);
    }
`;

// export const InputSearch = styled.div`
//     background-color: var(--light-gray-color);
//     max-width: 500px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     border-radius: 0.2rem;

//     input {
//         background-color: transparent;
//         padding: 0.6rem;
//         border: none;
//         outline: none;
//         width: 90%;
//     }

//     svg {
//         cursor: pointer;
//     }
// `;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;
    
    .favorites {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0.3rem;
        font-family: 'Poppins', sans-serif;
    }

    .shopping__cart {
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;

        span {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--primary-color);
            color: var(--white-color);
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1.5rem;
    border-radius: 0.2rem;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: none;
    outline: none;

    &:hover {
        background-color: #ef4444;
    }
`;