import styled from "styled-components";

export default function Header() {
    return (
        <StyleHeader>
            <h1>CINEFLEX</h1>
        </StyleHeader>
    )
}

const StyleHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    top: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    text-align: center;
    color: #E8833A;
    }`
