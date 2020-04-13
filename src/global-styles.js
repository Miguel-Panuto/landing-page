import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body, html {
        min-height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
    }

    body {
        background-color: #222;
    }

    h1 {
        color: #fff;
        padding: 15px 50px;
        text-shadow: 3px 3px 3px #151525;
    }

    header {
        width: 100%;
        height: 60px;
        background-color: #212343;
    }

    footer {
        padding: 60px 0;
        border-top: 4px solid #888;
        text-align: center;
        color: #888;
    }

    footer p {
        margin-top: 8px;
    }

    @media screen and (max-width: 1024px) {
        header {
            width: 100%;
            height: auto;
            text-align: center;
        }
    }
`;

export const Clear = styled.div`
    clear: both;
`;

export const Center = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;