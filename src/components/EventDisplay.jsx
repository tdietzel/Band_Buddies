import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function EventDisplay({ events = [], onBackButtonClick }) {

  return (
    <div>
      <button className="button" onClick={onBackButtonClick}>Back</button>
      <ul>
        {events.map(event => (
          <Container className="event-container" key={event.id}>
            <li>
              <p>Event Name: {event.name}</p>
              <p>City: {event._embedded.venues[0].city.name}</p>
              <p>State: {event._embedded.venues[0].state.name}</p>
              <p>Country: {event._embedded.venues[0].country.name}</p>
              <p>Address: {event._embedded.venues[0].address.line1}</p>
              <p>Date: {event.dates.start.localDate}</p>
            </li>
            {/* <button className="button" onClick={handleBackButtonClick}>Back</button> */}
          </Container>
        ))}
      </ul>
    </div>
  );
}

EventDisplay.propTypes = {
  events: PropTypes.array,
  onBackButtonClick: PropTypes.func.isRequired
};

export default EventDisplay;

