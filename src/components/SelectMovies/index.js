import {useState, useEffect} from "react";
import axios from "axios";
import {Div} from "./style";

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
        <Div>
        <h1>Selecione o filme</h1>
        <section>
            {
            movies.map(movie => {
                const {id, title, posterURL} = movie;
                return <div className="boxMovie">
                        <img src={posterURL} alt={title} key={id}/>
                        </div>
                })
            }
        </section>
        </Div>
    ) : <p>Carregando a página</p>
}