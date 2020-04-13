import React from 'react';

import { Container, List, Form } from './styles';
import { Center, Clear } from '../../global-styles'
import InputContainer from '../InputContainer';

const ContainerBanner = () => (
    <Container>
        <Center>
            <div>
                <List>
                    <ul>
                        <li>Lorem ipsum silor domor amet</li>
                        <li>Lorem ipsum silor domor amet</li>
                        <li>Lorem ipsum silor domor amet</li>
                        <li>Lorem ipsum silor domor amet</li>
                    </ul>
                </List>
            </div>
            <Form>
                <h2>
                    Preencha o formulário e inicie a sua
                    caminhada para virar um webmaster!
                </h2>
                <form action="">
                    <InputContainer name="nome" type="text" label="Nome*" />
                    <InputContainer type="email" name="email" label="Email*" />
                    <InputContainer type="tel" name="telefone" label="Telefone*" />
                    <p className="warning">
                        *Campos obrigatórios
                    </p>
                    <div className="input-submit-container">
                        <input type="submit" name="acao" value="ENVIAR" />
                    </div>{/*input-submit-container*/}
                </form>
            </Form>
            <Clear/>
        </Center>
    </Container>
);

export default ContainerBanner;
