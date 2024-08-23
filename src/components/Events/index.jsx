/* eslint-disable react/prop-types */

import { redirect } from "react-router-dom";

import EventItem from "./components/EventItem";
import useEventsData from "../../hooks/useEventsData";

const Events = ({ searchTerm }) => {
    const { events, loading, error } = useEventsData();

    const handleEventItemClick = (id) => {
        console.log("Evento clickeado", id);
        redirect(`/detail/${ id }`);
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if(searchTerm?.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase()))
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={eventItem.id} 
                id={eventItem.id}
                name={eventItem.name} 
                image={eventItem.images[0].url} 
                info={eventItem.info} 
                onEventClick={handleEventItemClick}
            />
        ));
    }

    if (error) {
        return <div>Error: Ha ocurrido un error</div>;
    }

    if (loading) {
        return <div>Cargando resultados...</div>;
    }

    return (
        <div>
            <h2>Events</h2>
            {renderEvents()}
        </div>
    )
};

export default Events;