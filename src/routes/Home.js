import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
    {
        movies {
            id,
            poster
        }
    }
`;

function Home() {
    const result = useQuery(GET_MOVIES);
    return (
        <h1>Home</h1>
    )
};

export default Home;