import React from 'react';
import styled from 'styled-components';

export default styled.img`
    border-radius: 50%;
    width: ${props => props.size};
    height: ${props => props.size};
    border: 3px solid white;
`;