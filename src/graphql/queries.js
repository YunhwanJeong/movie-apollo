import { gql } from '@apollo/client';

export const GET_MOVIES = gql`{
    movies {
        id,
        poster
    }
}`