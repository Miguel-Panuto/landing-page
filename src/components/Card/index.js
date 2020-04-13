import React from 'react';
import { FiMonitor } from 'react-icons/fi'

import { Container } from './styles';

const Card = (props) => (
    <Container>
        <FiMonitor size={128} color="#415" />
        <div className="text-container-single">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    </Container>
);

export default Card;
