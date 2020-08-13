import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query movies {
        movies {
            id,
            poster
        }
    }
`

export const GET_MOVIE = gql`
    query movie($id: Int!) {
        movie(id: $id) {
            id,
            title,
            year,
            genres,
            rating,
            poster,
            description
        }
    }
`