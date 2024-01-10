import React, { useState, useEffect } from 'react';
import ApiComponent from './ApiComponent';
import FormComponent from './FormComponent';
import EventDisplay from './EventDisplay';
// any other components needed

function App() {
  const [city, setCity] = useState('Portland');
  const [classificationName, setClassificationName] = useState('Music');
  const [monthsInAdvance, setMonthsInAdvance] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleFormSubmit = (newGenre, newLocation, newMonths) => {
    setCity(newLocation);
    setClassificationName(newGenre);
    setMonthsInAdvance(newMonths);
    setIsFormVisible(false);
  };

  const handleFormChange = () => {
    setHasSearched(false);
  };

  const handleBackButtonClick = () => {
    console.log("Back button function in app");
    setIsFormVisible(true);
    // setEvents([]);
  };



  console.log('Passing onBackButtonClick to EventDisplay, in App', typeof handleBackButtonClick);
  return (
    <div>
    <div className="hero-section">
      <div className="note note1">♪</div>
      <div className="note note2">♫</div>
      <div className="note note3">♪</div>
      <div className="note note4">♫</div>
      <div className="note note5">♪</div>
      <div className="note note6">♫</div>
        <h1>Welcome to Band Buddies</h1>
        <p>Find your favorite concerts and bands in your city!</p>
      </div>
      {isFormVisible ? (
        <FormComponent 
          onFormChange={handleFormChange}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <>
          <ApiComponent
            onBackButtonClick={handleBackButtonClick}
            city={city} 
            classificationName={classificationName} 
            monthsInAdvance={monthsInAdvance}
            // pass other necessary props
          />
        </>
      )}
    </div>
  );
}

export default App;

// return (
//   <div>
//    <FormComponent 
//    onFormChange={handleFormChange}
//    onFormSubmit={handleFormSubmit} />
//    <EventDisplay 
//   //  events={events}
//    city={city} 
//    classificationName={classificationName} 
//    monthsInAdvance={monthsInAdvance} />
//   </div>
// );

