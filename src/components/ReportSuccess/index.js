import {useNavigate} from "react-router-dom";

import {Title} from "../StylesAll/Title";
import {Main} from "../StylesAll/Main";
import {Button} from "../StylesAll/Button";
import {BackToHome} from "../StylesAll/BackToHome";

import {Section} from "./style";
import {Article} from "./style";

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
