import "../Movie.css";
import EventCard from "./EventCard";

const Events = (props) => {

    return (
        <div className="event_wrap">
            <div className="contents">

                <div className="event_title_wrap">
                    <h3>EVENT</h3>
                </div>
                <div className="event_list">
                        <div className="swiper-wrapper">
                        {
                            props.eventArr.map((m, index) => (
                                <EventCard
                                    eventInfo={m}
                                    eventOrder={index}
                                ></EventCard>
                            ))
                        }
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

export default Events;