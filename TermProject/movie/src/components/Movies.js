import "../Movie.css";
import MovieCard from "./MovieCard";

const Movies = (props) => {

    return (
        <div className="movieChartBeScreen_wrap">
            <div className="contents">
                <div className="movieChartBeScreen_btn_wrap">
                    <h3>
                        무비차트
                    </h3>
                </div>
                <div className="movieChart_list">
                    <div className="swiper-wrapper">
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
                </div>
            
            </div>
        </div>
      

    );
}

export default Movies;