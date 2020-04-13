import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 0;
    margin-top: -10px;
    min-width: 1200px;
    background-color: #DDD;
    text-align: center;

    h2 {
        margin-top: 18px;
        font-weight: normal;
    }

    p {
        width: 698px;
        margin: 15px 0;
        display: inline-block;
        text-align: justify;
    }

    .arrow {
        position: relative;
        top: 80px;
        left: 50%;
        margin-left: -20px;
        width: 48px;
        height: 48px;
        background-color: #339;
        border-radius: 64px;
    }
`;