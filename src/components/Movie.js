import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Poster = styled.img``;

function Movie (props) {
    console.log(props);
    return (
        <Container>
            <Poster />
        </Container>
    )
}

export default Movie;