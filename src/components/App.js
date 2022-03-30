import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Header/";
import SelectMovies from "./SelectMovies/";
import SelectSession from "./SelectSession";
import SelectSeat from "./SelectSeat/";
import ReportSuccess from "./ReportSuccess/";

export default function App() {

    const [generateTicket, setGenerateTicket] = useState("");

    return (
        <BrowserRouter>
        <GlobalStyle color={"#293845"} />
        <Header />
        <Routes>
            <Route path="/" element={<SelectMovies />}></Route>
            <Route path="/sessoes/ :movieId" element={<SelectSession />}></Route>
            <Route path="/assentos/ :sessionId" element={
                <SelectSeat getGenerateTicket={(ticket) => setGenerateTicket(ticket)} />} />
            <Route path="/sucesso" element={
                <ReportSuccess generateTicket={generateTicket} />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.04em;
  }
  nav {
    width: 100vw;
    height: 80px;
    margin-top: 120px;
    margin-bottom: 0px;
    color: ${props => props.color};
  }
  form{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 55px;
  }
  label{
    font-size: 18px;
    text-align: left;
    align-items: left;
    color: #293845;
    margin-bottom: 10px;
  }
  input{
    width: 327px;
    height: 51px;
    margin-bottom: 20px;
    align-items: left;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
  }
`
