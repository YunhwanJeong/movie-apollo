import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Like from '../components/Like';

const Container = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
`;
const Poster = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

function Movie (props) {
    const { id, poster, isLiked } = props;
    return (
        <Container id={id}>
            <Link to={`/${id}`}>
                <Poster src={poster}/>
            </Link>
            <Like {...props} />
        </Container>
    )
}

export default Movie;