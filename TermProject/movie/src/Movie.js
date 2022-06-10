import Header from './components/Header';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Events from './components/Events';
import {useState} from "react";
import {Routes, Route} from "react-router"

const movie1 = {
    movieId : 1,
    movieNameKor : '브로커',
    movieNameEng: 'Broker',
    rateOfBooking: 30.8,
    freeEgg: 84,
    director: '고레에다 히로카즈',
    actor: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
    genre: '드라마',
    base: '12세 이상, 129분, 한국',
    release: '2022.06.08',
    imgName: 'Broker.jpeg'
};

const movieArr = [movie1];

function Movie() {
    const [clickedMovie, setClickedMovie] = useState();
    return (
        <div id="cgvwrap">
            <div className="header"> 

                <Header></Header>
                <NavBar></NavBar>
            </div>
            <div id="container">
                <Movies
                    movieArr={movieArr}
                    setClickedMovie={setClickedMovie}>
                </Movies>
                
            </div>
        </div>
    );
}

export default Movie;

