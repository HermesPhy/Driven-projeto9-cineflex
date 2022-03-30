import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Title from "../StylesAll/Title";
import Main from "../StylesAll/Main";
import Button from "../StylesAll/Button";
import BackToHome from "../StylesAll/BackToHome";
import Footer from "../Footer/";

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

const SessionInfo = styled.article`
    width: 400px;
    height: 88px;
`

const Date = styled.h3`
    height: 35px;
    margin-left: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: left;
    letter-spacing: 0.02em;
    color: #293845;
`

const Hours = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 24px;
`