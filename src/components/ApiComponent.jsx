import React, { useState, useEffect } from 'react';
import GenreFilter from './GenreFilter';

// REACT_APP_API_KEY=V2hjfkUOp6UAmB20EKaH9B97kxAwxMzF


function EventList(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  function fetchEvents() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const city = `Portland`;
    
    const currentDate = new Date();
    const oneMonthLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    const startDateTime = currentDate.toISOString().split('.')[0]+"Z";
    const endDateTime = oneMonthLater.toISOString().split('.')[0]+"Z";

    const classificationName = props.classificationName;

    //for music only
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${city}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&classificationName=${classificationName}`;
    
    //https://app.ticketmaster.com/discovery/v2/events.json?apikey=V2hjfkUOp6UAmB20EKaH9B97kxAwxMzF&city=portland&classificationName=music


    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data._embedded) {
        setEvents(data.embedded.events);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, [props.classificationName]);

  return (
    <div>
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <p>{event.name}</p>
              <p>{event.dates.start.localDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;














// import React, { useEffect, useReducer } from 'react';
// import topStoriesReducer from './../reducers/top-stories-reducer';
// import { getTopStoriesFailure, getTopStoriesSuccess } from '../actions';

// const initialState = {
//   isLoaded: false,
//   topStories: [],
//   error: null
// };

// function TopStories () {
//   // We initialize the useReducer hook.
//   const [state, dispatch] = useReducer(topStoriesReducer, initialState);

//   useEffect(() => {
//     fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`${response.status}: ${response.statusText}`);
//         } else {
//           return response.json()
//         }
//       })
//       .then((jsonifiedResponse) => {
//         // We create an action and then dispatch it.
//         const action = getTopStoriesSuccess(jsonifiedResponse.results)
//         dispatch(action);
//       })
//       .catch((error) => {
//         // We create an action and then dispatch it. 
//         const action = getTopStoriesFailure(error.message)
//         dispatch(action);
//       });
//     }, [])
  
//   // we destructure error, isLoaded, and topStories from the state variable.
//   const { error, isLoaded, topStories } = state;

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   } else if (!isLoaded) {
//     return <h1>...Loading...</h1>;
//   } else {
//     return (
//       <React.Fragment>
//         <h1>Top Stories</h1>
//         <ul>
//           {topStories.map((article, index) =>
//             <li key={index}>
//               <h3>{article.title}</h3>
//               <p>{article.abstract}</p>
//             </li>
//           )}
//         </ul>
//       </React.Fragment>
//     );
//   }
// }

// export default TopStories;