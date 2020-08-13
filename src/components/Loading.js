import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.p`
    color: ${({ path }) => {
        if (path === '/:id') {
            return '#E2E4E4';
        } else if (path === '/') {
            return '#4f4f4f';
        }
    }};
    font-size: 4rem;
    margin-top: 50px;
`;

function Loading ({ path }) {
    return (
        <StyledLoading path={path}>Loading...</StyledLoading>   
    )
}

export default Loading;