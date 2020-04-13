import React from 'react';

import { Container } from './styles';
import { Center, Clear } from '../../global-styles';

import Card from '../Card';

const Section = () => (
    <>
        <Container>
            <Center>
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <div className="container-section">
                    <Card title="Lorem Ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet magna vel mauris interdum vestibulum sed id
                        quam. Sed vel magna at est varius posuere. Integer felis
                        dolor, iaculis.
                    </Card>
                    <Card title="Lorem Ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet magna vel mauris interdum vestibulum sed id
                        quam. Sed vel magna at est varius posuere. Integer felis
                        dolor, iaculis.
                    </Card>
                    <Card title="Lorem Ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet magna vel mauris interdum vestibulum sed id
                        quam. Sed vel magna at est varius posuere. Integer felis
                        dolor, iaculis.
                    </Card>
                </div>
            </Center>
        </Container>
        <Clear />
    </>
);

export default Section;
