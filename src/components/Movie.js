import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 200px;
    height: auto;
`;
const Poster = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

function Movie ({ id, poster }) {
    return (
        <Link to={`/${id}`}>
            <Container id={id}>
                <Poster src={poster}/>
            </Container>
        </Link>
    )
}

export default Movie;