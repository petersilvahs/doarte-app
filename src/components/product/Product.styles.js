import styled from 'styled-components';

export const Card = styled.div
`
    grid-area: prod;
    width: 300px;
    padding: 1.5rem;
    height: 522px;
    margin: 0 10px;
    border-radius: 10px;
    background: linear-gradient(to bottom, var(--bronze) 1%, var(--snow) 30%);
    border: 1px solid var(--orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        align-self: flex-start;
        width: 90%;
    }

    @media (max-width: 768px) {
        height: 400px;
        margin-bottom: 1.5rem;
    }
`;