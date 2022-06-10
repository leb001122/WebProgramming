import "../Movie.css";
import MovieCard from "./MovieCard";

const Movies = (props) => {
    return (
        <div className="movieChartBeScreen_wrap">
            {props.movieArr.map((m, index) => (
                <MovieCard
                    movieInfo={m}
                    setClickedMovie={props.setClickedMovie}
                    movieOrder={index}
                    >
                </MovieCard>
            ))}

            <div className="swiper-button-next" tabindex="0" role="bnutton" aria-label="다음 슬라이드" aria-disabled="false">
            </div>
            <div className="swiper-button-prev swiper-button-disabled" tabindex="0" role="bnutton" aria-label="이전 슬라이드" aria-disabled="true">
            </div>
        </div>
    );
}

export default Movies;