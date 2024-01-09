import React, { useEffect, useState } from 'react';

async function EventList() {
  const API_KEY = import.meta.env.API_KEY;
  const locale = '*';
  const id = '362';
  const [upcomingEvents, setUpcomingEvents] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?locale=${locale}&id=${id}&apikey=${API_KEY}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const attractions = data._embedded.attractions;
        const [eventList, setEventList] = useState([]);
        
        attractions.forEach((attraction) => {
          const name = attraction.name;
          const id = attraction.id;
        })
        const name = data.
        setUpcomingEvents(data);

      } catch (error) {
        console.error('Error fetching events:', error);

      }
    }

    fetchEvents();
  }, []);

  return (
    <div>
      {upcomingEvents}
    </div>
  );
}

export default EventList;