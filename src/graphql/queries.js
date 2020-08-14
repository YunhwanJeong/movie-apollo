import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query movies {
        movies {
            id,
            poster,
            isLiked @client
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
            description,
            poster,
            isLiked @client
        }
    }
`

export const LIKE_MOVIE = gql`
    mutation likeMovie($id: Int!) {
        likeMovie(id: $id) @client
    }
`;