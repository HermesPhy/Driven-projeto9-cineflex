import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
    width: 100vw;
    height: 100px;
    margin-top: 120px;
    margin-bottom: 0px;
    color: #293845;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    letter-spacing: 0.04em;
    }

    section {
    max-width: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    }

    article {
    width: 26px;
    height: 26px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6px;
    background: ${props => props.availability === 0 ? "#C3CFD9" : props.availability === 1 ? "#F7C52B" : "#8DD7CF"};
    border: 1px solid ${props => props.availability === 0 ? "#808F9D" : props.availability === 1 ? "#F7C52B" : "#1AAE9E"};
    border-radius: 12px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    }
`