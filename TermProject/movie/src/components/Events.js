import "../Movie.css";
import EventCard from "./EventCard";

const Events = (props) => {
    return (
        <div className="event_wrap">
            <div className="contents">
                <div className="event_title_wrap">
                    <h3>EVENT</h3>
                </div>
                <div className="event_list_wrap">
                    <div className="swiper event_list">
                        <div className="swiper-wrapper">
                        {
                            props.eventArr.map((m) => {
                                <EventCard
                                    eventInfo={m}
                                ></EventCard>
                            })
                        }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Events;