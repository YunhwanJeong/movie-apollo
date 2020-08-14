import React from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

import { LIKE_MOVIE } from '../graphql/queries';

const StyledLikeButton = styled.button`
    cursor: pointer;
    margin-top: 10px;
`;

function Like ({ id, isLiked }) {
    const [likeMovie] = useMutation(LIKE_MOVIE, {
        variables: {
            id
        }
    });
    return (
    <StyledLikeButton onClick={likeMovie}>{isLiked ? "💖" : "🤍"}</StyledLikeButton>
    )
}

export default Like;