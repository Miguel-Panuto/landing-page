import React from 'react';
import { FiChevronDown } from 'react-icons/fi'
import { Container } from './styles';

const ContainerDesc = () => (
    <Container>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus in purus vel augue euismod iaculis. Aliquam ut dictum ipsum,
            ac rhoncus nisl. Vestibulum mi orci, congue quis risus ac, dapibus
            aliquet elit. In et nisi nisl. Nulla mollis condimentum justo. Nulla
            non eros sit amet ex rhoncus hendrerit. Aenean eleifend dolor magna,
            non dapibus nunc semper a. Maecenas posuere lorem id nisl pharetra,
            nec sodales risus malesuada. Proin in condimentum nunc.
            Nam in nisl eu velit scelerisque tristique.
          </p>
          <div className="arrow">
            <FiChevronDown size={48} color="white" />
          </div> 
    </Container>
);

export default ContainerDesc;
