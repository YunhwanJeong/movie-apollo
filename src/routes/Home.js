import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Movie from '../components/Movie';

import { GET_MOVIES } from '../graphql/queries';

const StyledHero = styled.section``;
const StyledHero__Heading = styled.h1``;
const StyledHero__Subheading = styled.p``;

const StyledMovies = styled.section``;
const StyledMovies__Wrapper = styled.div``;

function Home() {
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <>
            <StyledHero>
                <StyledHero__Heading></StyledHero__Heading>
                <StyledHero__Subheading></StyledHero__Subheading>
            </StyledHero>
            <StyledMovies>
                <StyledMovies__Wrapper>
                    { loading ? "Loading..." : data.movies.map(movie => <Movie {...movie}></Movie>)}
                </StyledMovies__Wrapper>
            </StyledMovies>
        </>
    )
};

export default Home;