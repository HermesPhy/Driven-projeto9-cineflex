import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {Container} from "./style";

export default function selectSeat() {

    const {sessionId} = useParams();
    const [seats, setSeats] = useState([""]);
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
            setSeats(data.seats);
        });
        promise.catch(err => console.log(err.response));
    }, []);

    function reservedSeat(e){
        e.preventDefault();
        const promise = axios.post(postURL, {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        });
        promise.then(response => {
            navigate("/sucesso");
        });
        promise.catch(error => console.log(err.response));
    }

    return seats.length > 0 ? (
        <Container>
            <h2>Selecio o(s) assentos(s)</h2>
            <SeatAll>
                {
                    seats.map(seat => {
                        const {id, name, isAvailable} = seat;
                        return (
                            isAvailable ? 
                            <SeatSelected
                            availability = {selectedSeats.includes(id)?2:0}
                            onClick = {() => 
                            selectedSeats.includes(id) ?
                            selectedSeats(() => {
                                let seatsAux = selectedSeats;
                            seats.splice(selectedSeats.indexOf(id), 1);
                            return [...seatsAux];
                            }) :
                        setSelectedSeats([...selectedSeats, id])
                    }>
                    {id}
                    </SeatSelected> :
                    <SeatSelected availability = {1}
                        onClick = {() => alert("Este assento não está disponível")}>
                            {id}
                    </SeatSelected>
                    )
                    })
                }
            </SeatAll>

            <ColorSeats>
                <Disponibility>
                    <PositionSeat availability = {2}></PositionSeat>
                    <p>Selecionado</p>
                </Disponibility>
                <Disponibility>
                    <PositionSeat availability = {0}></PositionSeat>
                    <p>Disponível</p>
                </Disponibility>
                <Disponibility>
                    <PositionSeat availability = {1}></PositionSeat>
                    <p>Inisponível</p>
                </Disponibility>
            </ColorSeats>
            <form onSubmit={reserveSeat}>
                <Disponibility>
                    <p>Nome do comprador:</p>
                    <input type="text"
                    placeholder = "Digite seu nome..."
                    onChange = {(e) => setName (e.target.value)}
                    value = {name}
                    required />
                </Disponibility>
                <Disponibility>
                    <p>CPF do comprador:</p>
                    <input type="text"
                    placeholder = "Digite seu CPF..."
                    onChange = {(e) => setCpf (e.target.value)}
                    value = {cpf}
                    required />
                </Disponibility>
                <button type = "submit">Reservar assento(s)</button>
            </form>
        </Container>
    ) : (
        <Container>
            <h2> Carregando assentos...</h2>
        </Container>
    );
}