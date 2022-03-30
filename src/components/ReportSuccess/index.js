import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import Title from "../StylesAll/Title";
import Main from "../StylesAll/Main";
import Button from "../StylesAll/Button";
import BackToHome from "../StylesAll/BackToHome";

export default function ReportSuccess({generateTicket}){
    const {title, date, time, imagePath, places, buyer, buyerId, sessionId} = generateTicket;
    const navigate = useNavigate();
    return (
        <>
            <BackToHome><ion-icon onClick = {() => navigate(`/assentos/${sessionId}`)} name = "chevron-back"></ion-icon></BackToHome>
            <Main>
                <Title detail="bold"> 
                    <p>Pedido feito</p>  
                    <p>com sucesso!</p>
                </Title>
                <Section>
                    <Article>
                        <h3>Filme e sessão</h3>
                        <p>{title}</p>
                        <p>{date} {time}</p>
                    </Article>
                    <Article>
                        <h3>Ingressos</h3>
                        {console.log(places)}
                        {places.map(place => {return <p>Assento {place}</p>})}
                    </Article>
                    <Article>
                        <h3>Comprador</h3>
                        <p>Nome: {buyer}</p>
                        <p>CPF: {buyerId}</p>
                    </Article>
                </Section>
                <Button width = {"225px"} onClick = {() => navigate("/")}>Voltar para Home</Button>
            </Main>
        </>
    );
}

const Section = styled.section`
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

const Article = styled.article`
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
