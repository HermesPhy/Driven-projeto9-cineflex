import styled from "styled-components";

export const DistributeSeats = styled.section`
    max-width: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const SeatPlace = styled.article`
    width: 26px;
    height: 26px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6px;
    background: ${props => props.availability == 0 ? "#C3CFD9" : props.availability == 1 ? "#F7C52B" : "#8DD7CF"};
    border: 1px solid ${props => props.availability == 0 ? "#808F9D" : props.availability == 1 ? "F7C52B" : "#1AAE9E"};
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
`

export const Section = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
`

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
`