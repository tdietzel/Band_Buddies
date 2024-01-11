import App from './App';
import React, { useState, useEffect } from 'react';
import EventDisplay from './EventDisplay';

function ApiComponent(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  function fetchEvents() {
    const apiKey = import.meta.env.VITE_API_KEY;
  
    const city = props.city || `Portland`;  //FEED ME THE VALUE W PROPS

    const monthsInAdvance = props.monthsInAdvance || 1;

    const classificationName = props.classificationName || 'music'; //GETS PROP FOR GENRE 
    
    const currentDate = new Date();
    const oneMonthLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthsInAdvance, currentDate.getDate());
    const startDateTime = currentDate.toISOString().split('.')[0]+"Z";
    const endDateTime = oneMonthLater.toISOString().split('.')[0]+"Z";

    //for music only
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${city}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&classificationName=${classificationName}`;
    
    //https://app.ticketmaster.com/discovery/v2/events.json?apikey=V2hjfkUOp6UAmB20EKaH9B97kxAwxMzF&city=portland&classificationName=music //Use this to test w postman

    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data._embedded) {
        setEvents(data._embedded.events);
        setLoading(false);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setLoading(false);
    });
  };

  useEffect(() => {

    if (props.city || props.classificationName || props.monthsInAdvance || props.handleBackButtonClick) {
      fetchEvents();
      setHasSearched(true);
    }
    fetchEvents();
  }, [props.classificationName, props.monthsInAdvance, props.city, props.handleBackButtonClick]);

  return (
    <div>
      {loading ? (
        <p>Loading events...</p>
      ) : hasSearched && events.length === 0 ? (
        <p>No events to display</p>
      ) : (
        <EventDisplay 
        events={events}
        onBackButtonClick={props.onBackButtonClick}
         />
      )}
    </div>
  );
}
export default ApiComponent;

