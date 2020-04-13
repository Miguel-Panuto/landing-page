import styled from 'styled-components';

export const Container = styled.div` 
    padding: 90px 0;

    h2 {
        text-align: center;
        color: #462663;
        font-weight: normal;
    }

    .container-section {
        margin-top: 40px;
        text-align: center;
        display: flex;
    }
    @media screen and (max-width: 600px){
        .container-section {
            flex-direction: column;
        }
    }
`;