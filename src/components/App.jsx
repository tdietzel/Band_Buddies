import React from 'react';
import Header from './Header';
import EventList from './EventList';
import ApiComponent from './ApiComponent';
import DateComponent from './Date';
import EventDetail from './EventDetail';
import GenreFilter from './GenreFilter';
import LocationSelector from './LocationSelector';
import FormComponent from './FormComponent';
// any other components needed

function App() {
  return (
    <div>
      <Header />
      <EventList />
      <ApiComponent classificationName={classificationName}/>
      <DateComponent />
      <EventDetail />
      <GenreFilter />
      <LocationSelector />
      {/* Put other components here */}
    </div>
  );
}

export default App;
