import React from 'react';
// import EventList from './ApiComponent';

function EventDisplay( { events = [] } ) {
 
  // if (!events || events.length === 0) {
  //   return <p>No events to display</p>
  // }

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <p>{event.name}</p>
          <p>{event.dates.start.localDate}</p>
        </li>
      ))}
    </ul>
  );
}

export default EventDisplay;