import styled from 'styled-components';
import banner from '../../assets/images/banner.png'

export const Container = styled.div`
    width: 100%;
    height: 557px;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1024px){
        height: 100%;
        padding-bottom: 50px;
    }
`;

export const List = styled.div`
    padding: 30px;
    margin-top: 100px;
    float: left;
    width: 619px;
    height: 270px;
    background-color: rgba(33, 35, 67, 0.7);
    
    div:first-child {
        height: 100%;
    }

    ul {
        list-style-position: inside;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }      

    ul li {
        margin-top: 18px;
        color: #fff;
    }

    @media screen and (max-width: 1024px){
        float: none;
        max-width: 500px;
        width: 80vw;
        margin-top: 10px;
        height: 270px;
    }
`;

export const Form = styled.div`
    padding: 10px;
    width: 400px;
    height: calc(100% + 30px);
    background-color: #fff;
    float: right;
    position: relative;
    top: -15px;
    border: 8px solid #ccc;

    h2 {
        font-size: 21px;
        font-weight: normal;
        color: #ccc;
    }

    p {
        display: inline-block;
        width: 100%;
        font-size: 17px;
        color: #bbb;
    }

    p {
        margin: 20px 0;
    }

    .input-submit-container {
        text-align: center;
    }

    input[type=submit] {
        width: 280px;
        letter-spacing: 4px;
        height: 56px;
        color: #fff;
        display: inline-block;
        background-color: #363A6D; 
        font-size: 23px;
        border: 0;
        cursor: pointer;
        border-bottom: 5px solid #4A5097;
        border-radius: 5px;
        transition: 0.2s;
    }

    input[type=submit]:hover {
        background-color: #227;
    }

    @media screen and (max-width: 1024px){
       float: none;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       height: 100%;
       width: 80%;
       max-width: 400px;
       margin-top: 30px;
       padding: 10px;
       top: 0; 
    }
`;