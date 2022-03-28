//import {useState} from "react";
//import {EstiloCorpo} from "./style";
import Header from "./Header/";
import Footer from "./SelectFooter/";
import SelectMovies from "./SelectMovies/";
import SelectTime from "./SelectTime/";
import SelectSeat from "./SelectSeat/";

export default function App() {
    return (
        <>
        <Header />
        <Footer />
        <SelectMovies />
        <SelectTime />
        <SelectSeat />
        </>
    )
}