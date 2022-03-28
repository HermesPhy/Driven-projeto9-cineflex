import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Header} from "./Header/";
import {SelectMovies} from "./SelectMovies/";
import {SelectSession} from "./SelectSession";
import {SelectSeat} from "./SelectSeat/";
import {ReportSuccess} from "./ReportSuccess/";
import {GlobalStyle} from "./style";

export default function App() {

    const [generateTicket, setGenerateTicket] = useState("");

    return (
        <BrowserRouter>
        <GlobalStyle color={"#293845"} />
        <Header />
        <Routes>
            <Route path="/" element={<SelectMovies />}></Route>
            <Route path="/sessoes/ :movied" element={<SelectSession />}></Route>
            <Route path="/assentos/ :sessionId" element={
                <SelectSeat getGenerateTicket={(ticket) => setGenerateTicket(ticket)} />} />
            <Route path="/sucesso" element={
                <ReportSuccess generateTicket={generateTicket} />}></Route>
        </Routes>
        </BrowserRouter>
    );
}