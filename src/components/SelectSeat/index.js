import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Title from "../StylesAll/Title";
import Main from "../StylesAll/Main";
import Button from "../StylesAll/Button";
import BackToHome from "../StylesAll/BackToHome";
import Footer from "../Footer/";

export default function SelectSeat({getGenerateTicket}){

    const {sessionId} = useParams();
    const [seats, setSeats] = useState([]);
    const [availability, setAvailability] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    
    const postURL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promise.then(response => {
            const {data} = response;
            setSeats(data);
        });
        promise.catch(err => console.log(err.response));
    });

    function reserveSeat(e){
        e.preventDefault();
        const promise = axios.post(postURL, {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        });

        promise.then(response => {
            navigate("/sucesso"); });
        promise.catch(err => console.log(err.response));
    }

    return seats.length !== 0 ? (
        <>
            <BackToHome><ion-icon onClick = {() => navigate(`/sessoes/${seats.movie.id}`)} name = "chevron-back"></ion-icon></BackToHome>
            <Main>
                <Title>Selecione o(s) assento(s)</Title>
                <DistributeSeats>
                    {   
                        seats.places.map( place => {
                            const {id, name, isAvailable} = place;
                            return (
                                isAvailable ?
                                
                                <SeatPlace availability={selectedSeats.includes(id) ? 2 : 0} 
                                    onClick={() => 
                                        selectedSeats.includes(id) ?
                                        setSelectedSeats(() => {
                                            let placesAux = selectedSeats;
                                            placesAux.splice(selectedSeats.indexOf(id), 1);
                                            return [...placesAux];
                                        })
                                        :
                                        setSelectedSeats([...selectedSeats, id])
                                    }>    
                                    {id}
                                </SeatPlace>
                                :
                                <SeatPlace availability = {1} 
                                    onClick = {() => alert("Esse assento n??o est?? dispon??vel")}>
                                    {id}
                                </SeatPlace>

                            )
                        })
                    }
                </DistributeSeats>
                <Section>
                    <Article>
                        <SeatPlace availability = {2}></SeatPlace>
                        <p>Selecionado</p>
                    </Article>
                    <Article>
                        <SeatPlace availability = {0}></SeatPlace>
                        <p>Dispon??vel</p>
                    </Article>
                    <Article>
                        <SeatPlace availability = {1}></SeatPlace>
                        <p>Indispon??vel</p>
                    </Article>
                </Section>
                <form onSubmit={reserveSeat}>
                    <label>Nome do comprador:</label>
                    <input type = "text" 
                        placeholder = "Digite seu nome..." 
                        onChange={(e) => setName(e.target.value)}
                        value = {name}
                        required/>
                        {console.log(name)}
                    <label>CPF do comprador:</label>
                    <input type = "text" 
                        placeholder = "Digite seu CPF..."
                        minLength = {11}
                        maxLength = {11}
                        onChange = {(e) => setCpf(e.target.value)}
                        value = {cpf}
                        required/>
                        {console.log(cpf)}
                    <Button width = {"100%"} type = "submit" 
                            onClick = {() => {
                                const ticket = {
                                    title: seats.movie.title, 
                                    date: seats.day.date, 
                                    time: seats.name, 
                                    imagePath: seats.movie.posterURL, 
                                    seats: selectedSeats, 
                                    buyer: name, 
                                    buyerId: cpf,
                                    sessionId: sessionId};
                                    getGenerateTicket(ticket);
                                }
                                }>
                        Reservar assento(s)
                    </Button>
                </form>
                <Footer title = {seats.movie.title} posterURL = {seats.movie.posterURL} date = {seats.day.date} hour = {seats.name}></Footer>
            </Main>
        </>
    ):(
        <>
            <BackToHome><ion-icon onClick = {() => navigate(`/sessoes/${seats.movie.id}`)} name = "chevron-back"></ion-icon></BackToHome>
            <Main>
                <Title>Carregando assentos</Title>
            </Main>
        </>
    );
}

const DistributeSeats = styled.section`
    max-width: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const SeatPlace = styled.article`
    width: 26px;
    height: 26px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6px;
    background: ${props => props.availability === 0 ? "#C3CFD9" : props.availability === 1 ? "#F7C52B" : "#8DD7CF"};
    border: 1px solid ${props => props.availability === 0 ? "#808F9D" : props.availability === 1 ? "F7C52B" : "#1AAE9E"};
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

const Section = styled.section`
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

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
`