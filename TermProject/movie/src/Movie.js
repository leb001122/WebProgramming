import Header from './components/Header';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Events from './components/Events';
import {useState} from "react";
import {Routes, Route} from "react-router"

// 이미지 
const event1 = {
    eventId : 1,
    eventTitle : '개봉작 사용설명서',
    eventImg : 'event_img_1.jpeg',
    eventPeriod : '2022.01.01~2022.02.02',
}
const event2 = {
    eventId : 1,
    eventTitle : '[마녀2]CGV 필름마크',
    eventImg : 'event_img_2.jpg',
    eventPeriod : '2022.01.01~2022.02.02',
}
const event3 = {
    eventId : 1,
    eventTitle : '개봉작 사용설명서',
    eventImg : 'event_img_3.jpg',
    eventPeriod : '2022.01.01~2022.02.02',
}
const event4 = {
    eventId : 1,
    eventTitle : '개봉작 사용설명서',
    eventImg : 'event_img_4.jpg',
    eventPeriod : '2022.01.01~2022.02.02',
}

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

const movie2 = {
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
const movie3 = {
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
const movie4 = {
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
// const movie5 = {
//     movieId : 1,
//     movieNameKor : '브로커',
//     movieNameEng: 'Broker',
//     rateOfBooking: 30.8,
//     freeEgg: 84,
//     director: '고레에다 히로카즈',
//     actor: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
//     genre: '드라마',
//     base: '12세 이상, 129분, 한국',
//     release: '2022.06.08',
//     imgName: 'Broker.jpeg'
// };
// const movie6 = {
//     movieId : 1,
//     movieNameKor : '브로커',
//     movieNameEng: 'Broker',
//     rateOfBooking: 30.8,
//     freeEgg: 84,
//     director: '고레에다 히로카즈',
//     actor: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
//     genre: '드라마',
//     base: '12세 이상, 129분, 한국',
//     release: '2022.06.08',
//     imgName: 'Broker.jpeg'
// };
// const movie7 = {
//     movieId : 1,
//     movieNameKor : '브로커',
//     movieNameEng: 'Broker',
//     rateOfBooking: 30.8,
//     freeEgg: 84,
//     director: '고레에다 히로카즈',
//     actor: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
//     genre: '드라마',
//     base: '12세 이상, 129분, 한국',
//     release: '2022.06.08',
//     imgName: 'Broker.jpeg'
// };
// const movie8 = {
//     movieId : 1,
//     movieNameKor : '브로커',
//     movieNameEng: 'Broker',
//     rateOfBooking: 30.8,
//     freeEgg: 84,
//     director: '고레에다 히로카즈',
//     actor: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
//     genre: '드라마',
//     base: '12세 이상, 129분, 한국',
//     release: '2022.06.08',
//     imgName: 'Broker.jpeg'
// };
 
const movieArr = [movie1, movie2, movie3, movie4];
const eventArr = [event1, event2, event3, event4];

// const movieArr = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];

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
                <Events>
                    eventArr={eventArr}
                </Events>
            </div>
        </div>
    );
}

export default Movie;

