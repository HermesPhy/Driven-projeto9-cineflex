import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {ImageMovies from} "../StylesAll/ImageMovies";
import {Main from} "../StylesAll/Main";
import {Title from} "../StylesAll/Title";
import { BodyMovie } from "./style";

export default function SelectMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            const {data} = response;
            setMovies(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);
    

    return movies.length > 0 ? (
        <Main fullscreen={true}>
        <Title>Selecione o filme</Title>
        <BodyMovie>
            {
            movies.map(movie => {
                const {id, title, posterURL} = movie;
                return  (
                    <ImageMovies imagePath={posterURL}>
                            <Link to={`/sessoes/${id}`}>
                                <img src={posterURL} alt={title} key={id}/>
                            </Link>
                        </ImageMovies>
                        )
                })
            }
        </BodyMovie>
        </Main>
    ) : (
        <Main>
            <span>Carregando a página</span>
        </Main>
    );
}