import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Movie from '../components/Movie';
import Loading from '../components/Loading';

import { GET_MOVIES } from '../graphql/queries';

const StyledHero = styled.section`
    background: linear-gradient(to right, #bc4e9c, #f80759);
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledHero__Wrapper = styled.div`
    color: #E2E4E4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledHero__Heading = styled.h1`
    font-size: 5rem;
    margin-bottom: 20px;
`;
const StyledHero__Subheading = styled.p`
    font-size: 2.5rem;
`;

const StyledMovies = styled.section`
    background-color: #E2E4E4;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const StyledMovies__Wrapper = styled.div`
    margin-top: -50px;
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
`;

function Home(props) {
    const {
        match: {
            path
        }
    } = props;
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <>
            <StyledHero>
                <StyledHero__Wrapper>
                    <StyledHero__Heading>Apollo Movies</StyledHero__Heading>
                    <StyledHero__Subheading>Powered by GrapqhQL</StyledHero__Subheading>
                </StyledHero__Wrapper>
            </StyledHero>
            <StyledMovies>
                { loading 
                ? <Loading path={path} /> 
                : <StyledMovies__Wrapper>
                    {data.movies.map(movie => <Movie {...movie} key={movie.id}/>)}
                </StyledMovies__Wrapper>}
            </StyledMovies>
        </>
    )
};

export default Home;