import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import EventList from './EventList';
import ApiComponent from './ApiComponent';
// import DateComponent from './Date';
// import EventDetail from './EventDetail';
// import GenreFilter from './GenreFilter';
// import LocationSelector from './LocationSelector';
import FormComponent from './FormComponent';
import EventDisplay from './EventDisplay'
// any other components needed

function App() {
  const [city, setCity] = useState('Portland');
  const [classificationName, setClassificationName] = useState('Music');
  const [monthsInAdvance, setMonthsInAdvance] = useState(1);

  const handleFormSubmit = (newGenre, newLocation, newMonths) => {
    setCity(newLocation);
    setClassificationName(newGenre);
    setMonthsInAdvance(newMonths);
  };

  const handleFormChange = () => {
    setHasSearched(false);
  };


  return (
    <div>
     <FormComponent 
     onFormChange={handleFormChange}
     onFormSubmit={handleFormSubmit} />
     <EventDisplay 
    //  events={events}
     city={city} 
     classificationName={classificationName} 
     monthsInAdvance={monthsInAdvance} />
    </div>
  );
}

export default App;

//  {/* <Header /> */}
//       {/* <EventList /> */}
//       {/* <ApiComponent classificationName={classificationName} monthsInAdvance={monthsInAdvance}/> */}
//       <ApiComponent />
//       {/* <DateComponent /> */}
//       {/* <EventDetail /> */}
//       <EventDisplay />
//       <FormComponent />
//       {/* <GenreFilter /> */}
//       {/* <LocationSelector /> */}
//       {/* Put other components here */}