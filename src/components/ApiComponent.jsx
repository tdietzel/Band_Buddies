import React, { useState, useEffect } from 'react';
// import GenreFilter from './GenreFilter'; 
import EventDisplay from './EventDisplay';

// REACT_APP_API_KEY=V2hjfkUOp6UAmB20EKaH9B97kxAwxMzF

// const { city, classificationName } = props
function EventList(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);


  function fetchEvents() {
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(import.meta.env.VITE_API_KEY, "IMPORT.META.ENV");
    // console.log(process.env.VITE_API_KEY, "PROCESS.ENV");
    const city = props.city || `Portland`;  //FEED ME THE VALUE W PROPS

    const monthsInAdvance = props.monthsInAdvance || 1;
    
    const currentDate = new Date();
    const oneMonthLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthsInAdvance, currentDate.getDate()); //THE PLUS ONE SHOULD BE WHATEVER THE USER ENTERS
    const startDateTime = currentDate.toISOString().split('.')[0]+"Z";
    const endDateTime = oneMonthLater.toISOString().split('.')[0]+"Z";

    const classificationName = props.classificationName || 'music'; //GETS PROP FOR GENRE 

    //for music only
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${city}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&classificationName=${classificationName}`;
    
    //https://app.ticketmaster.com/discovery/v2/events.json?apikey=V2hjfkUOp6UAmB20EKaH9B97kxAwxMzF&city=portland&classificationName=music


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

    if (props.city || props.classificationName || props.monthsInAdvance) {
      fetchEvents();
      setHasSearched(true);
    }
    fetchEvents();
  }, [props.classificationName, props.monthsInAdvance, props.city]);

  return (
    <div>
      {loading ? (
        <p>Loading events...</p>
      ) : hasSearched && events.length === 0 ? (
        <p>No events to display</p>
      ) : (
        <EventDisplay events={events} />
      )}
    </div>
  );
}
export default EventList;

{/* <ul>
{events.map(event => (
  <li key={event.id}>
    <p>{event.name}</p>
    <p>{event.dates.start.localDate}</p>
  </li>
))}
</ul> */}












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