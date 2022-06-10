import "../Movie.css";
import MovieCard from "./MovieCard";

const Movies = (props) => {
    console.log("movies : " + props.movieArr[0].movieId);
    return (
        <div className="movieChartBeScreen_wrap">
            <div className="contents"> 
                <div className="swiper movieChart_list swiper-container-initialized swiper-container-horizontal"
                    id="movieChart_list">
                    <div className="swiper-wrapper">
                        {props.movieArr.map((m, index) => (
                            <MovieCard
                                movieInfo={m}
                                setClickedMovie={props.setClickedMovie}
                                movieOrder={index}
                                >
                            </MovieCard>
                        ))}

                    </div>
                    <div className="swiper-button-next" tabindex="0" role="bnutton" aria-label="다음 슬라이드" aria-disabled="false">
                    </div>
                    <div className="swiper-button-prev swiper-button-disabled" tabindex="0" role="bnutton" aria-label="이전 슬라이드" aria-disabled="true">
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Movies;