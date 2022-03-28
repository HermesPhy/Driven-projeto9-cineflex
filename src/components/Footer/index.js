import {FooterMain} from "./style";
import {ImageMovies} from "../StylesAll/ImageMovies";
import {FooterContent} from "./style";

export default function Footer({title, posterURL, date, hour}){
    return (
        <FooterMain>
            <ImageMovies imagePath={posterURL} footer={true}>
                <img src={posterURL} alt={title} />
            </ImageMovies>
            <FooterContent>
                <h3>{title}</h3>
                <h3>{date} - {hour}</h3>
            </FooterContent>
        </FooterMain>
    );
}