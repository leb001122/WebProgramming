import "../Movie.css";


const EventCard = (props) => {
    console.log(props.eventInfo.eventTitle);
    return (
        <div className="swiper-slide"
            data-order={props.eventInfo.eventOrder}
        >

            <div className="img_wrap">
                <img src={"img/"+props.eventInfo.eventImg}/>
            </div>
            <div className="event_info_wrap">
                <strong>{props.eventInfo.eventTitle}</strong>
                <span>
                    {props.eventInfo.eventPeriod}
                </span>
            </div>
        </div>
    );
}

export default EventCard;