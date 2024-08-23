import './styles.css'

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EventItem = ({id, name, image, info, onEventClick}) => {
    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id);
    }
    return (
        <div className='event-item-container'>
            <img src={image} alt={name} height={200} width={200} />
            <div className='event-info-container'>
                <h4>{name}</h4>
                <p>{info}</p>
                <button onClick={handleSeeMoreClick}>
                    <Link to={`/detail/${ id }`} >
                        Ver más
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default EventItem;