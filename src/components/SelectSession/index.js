import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

import {Title} from "../StylesAll/Title";
import {Main} from "../StylesAll/Main";
import {Button} from "../StylesAll/Button";
import {BackToHome} from "../StylesAll/BackToHome";
import {Footer} from "../Footer/";

import {SessionInfo} from "./style";
import {Date} from "./style";
import {Hours} from "./style";

export default function SelectSession(){

    const {movieId} = useParams();
    const [sessions, setSessions] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => {
            const {data} = response;
            setSessions(data);
        });
        promise.catch(err => console.log(err.response));
    }, []);
    console.log(sessions.length);
    return sessions !== 0 ? (
        <>
            <BackToHome><ion-icon onClick={() => navigate("/")} name="chevron-back"></ion-icon></BackToHome>
            <Main>
                <Title>Selecione o horário</Title>
                {
                    sessions.days.map( session => {
                        console.log(session);
                        const {id, weekday, date, showtimes} = session;
                        return (
                            <SessionInfo>
                                <Date> {weekday} - {date} </Date>
                                <Hours>
                                    {
                                        showtimes.map( showtime => {
                                            const {name, id} = showtime;
                                            return (
                                                <Link to={`/assentos/${id}`}>
                                                    <Button width={"82px"}>{name}</Button>
                                                </Link>
                                            )
                                        })
                                    }
                                </Hours>
                            </SessionInfo>
                        )
                    })
                }
                <Footer title={sessions.title} posterURL={sessions.posterURL} date={""} hour={""}></Footer>
            </Main>
        </>
        ):(
        <>
            <BackToHome><ion-icon onClick={() => navigate("/")} name="chevron-back"></ion-icon></BackToHome>
            <Main>
                <Title>Carregando sessões</Title>
            </Main>
        </>
        );
}