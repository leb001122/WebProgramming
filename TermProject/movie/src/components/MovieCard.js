import "../Movie.css";

const MovieCard = (props) => {
    
    return (
        <div className="swiper-slide" 
            data-order={props.movieInfo.movieOrder}
        > 
            <div className="img_wrap">
                <img src={"img/"+props.movieInfo.imgName} alt={props.movieInfo.movieNameKor}/>
            </div>
            <div className="movie_info_wrap">
                <stong className="movieName">{props.movieInfo.movieNameKor}</stong>
                <span>
                    <img src="img/eggGoldenegggood.png" alt="Golden Egg good"/>
                    {props.movieInfo.freeEgg + "%"}
                </span>
                <span>
                    {"예매율 " + props.movieInfo.rateOfBooking + "%"}
                </span>
            </div>
        </div>
    );
}

export default MovieCard;