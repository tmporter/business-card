import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    & > * {
        margin: 0 10px;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s;

    &:hover {
        transform: rotate(20deg) scale(1.5);
    }
`;