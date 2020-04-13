import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    span {
        width: 100%;
        font-size: 17px;
        color: #bbb;
    }
    input {
        margin-top: 8px;
        width: 344px;
        border-radius: 5px;
        height: 55px;
        border: 1px solid #ccc;
    }

    @media screen and (max-width: 1024px){
        input {
            width: 100%;
            max-width: 280px;
        }
    }
`;