import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    display: flex;
    flex-direction: column;
    left: 0px;
    margin-top: 28px;
    margin-bottom: 62px;
    letter-spacing: 0.04em;
    color: #293845;
    text-align: left;
`

export const Article = styled.article`
    margin-bottom: 20px;
    margin-left: 28px;
    display: flex;
    flex-direction: column;
    
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px; 
    }
    
    p{
        font-size: 22px;
        line-height: 26px;
    }
`