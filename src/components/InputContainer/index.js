import React from 'react';

import { Container } from './styles';

const InputContainer = (props) => (
    <Container className="input-container">
        <span>{props.label}</span>
        <input type={props.type} name={props.name} required />
    </Container>
);

export default InputContainer;
