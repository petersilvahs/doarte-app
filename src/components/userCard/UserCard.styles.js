import styled from 'styled-components';

export const Card = styled.div
`
    width: 90%;
    height: 230px;
    margin: 0 auto;
    background: var(--white);
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Profile = styled.div
`
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        width: 70%;

        h6{
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: var(--black);
        }

        h6{
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 14px;
            color: var(--blue);
        }
    }
`;

export const Review = styled.p
`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: var(--black);
    line-height: 30px;
`;

export const Rate = styled.h6`
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
`