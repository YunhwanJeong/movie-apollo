import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_MOVIE } from '../graphql/queries';

import Loading from '../components/Loading';

const StyledContainer = styled.div`
    display: flex;
    min-height: 100vh;
    color: #E2E4E4;
`;

const StyledContainer__Contents = styled.div`
    background: linear-gradient(#bc4e9c, #f80759);
    flex-basis: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.5%;
`;
const StyledContainer__ContentsWrapper = styled.div`
    font-size: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`;
const StyledHeading = styled.div``;
const StyledHeader = styled.div`
    font-size: 2.5em;
    font-weight: 500;
    margin-bottom: 60px;
    line-height: 1.2;
`;
const StyledSpecification = styled.div``;
const StyledRating = styled.div`
    margin-bottom: 40px;
`;
const StyledYear = styled.div`
    margin-bottom: 20px;
`;
const StyledGenres = styled.div``;
const StyledDescription = styled.p`
    font-size: 1.1em;
    line-height: 1.5;
    letter-spacing: 0.1px;
`;

const StyledContainer__Image = styled.div`
    background-color: #E2E4E4;
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledImage__Container = styled.div`
    width: 300px;
    height: auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
const StyledImage__Poster = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

function Detail(props) {
    const {
        match: {
            path,
            params: {
                id
            }
        }
    } = props;
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: parseInt(id)
        }
    });
    
    return (
        <StyledContainer>
            <StyledContainer__Contents>
                {loading 
                ? <Loading path={path}/> 
                : <StyledContainer__ContentsWrapper>
                    <StyledHeading>
                        <StyledHeader>{data?.movie.title}</StyledHeader>
                        <StyledSpecification>
                            <StyledRating>{data?.movie.rating}⭐</StyledRating>
                            <StyledYear>{data?.movie.year}</StyledYear>
                            <StyledGenres>{data?.movie.genres.join(", ")}</StyledGenres>
                        </StyledSpecification>
                    </StyledHeading>
                    <StyledDescription>{data?.movie.description}</StyledDescription>
                </StyledContainer__ContentsWrapper>}
            </StyledContainer__Contents>
            <StyledContainer__Image>
                <StyledImage__Container>
                    <StyledImage__Poster src={data?.movie.poster}/>
                </StyledImage__Container>
            </StyledContainer__Image>
        </StyledContainer>
    )
};

export default Detail;