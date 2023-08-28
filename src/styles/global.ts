import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #DC2626;
        --secondary-color: #cccccc;
        --light-gray-color: #f1f1f1;
        --white-color: #fff;
        --black-color: #000;
        --primary-font: 'Poppins', sans-serif;
    }

    *,
    ::after,
    ::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smoth;
    }

    body {
        --webkit-font-smoothing: antialiased;
        font-family: var(--primary-font);
    }

    ol, ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    body,
    input,
    textarea,
    button {
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
