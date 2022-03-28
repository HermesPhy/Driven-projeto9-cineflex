import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import {Div} from "./style";

export default function SelecTime() {

    const {movieId} = useParams();
    const [sessions, setSessions] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then((response) => {
            const {data} = response;
            setSessions(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);
    

    return (
        <Div>
        <h1>Selecione o horário</h1>
        <section>
            {
            sessions.days.map(session => {
                const {weekday, date, showtimes} = session;
                return (<><h2>{weekday} - {date}</h2>
                       <div className="boxTime">
                           {
                            showtimes.map(showtime => {
                                const {name} = showtime;
                                return (
                                    <div>
                                    <button>{name}</button>
                                    </div>
                                )
                            })
                            }
                        </div></>
                )
                })
            }
        </section>
        </Div>
    )
}