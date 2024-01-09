import React, { useState, useEffect } from "react"
import ApiComponent from "./ApiComponent"

export default function FormComponent() {
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');
  const [months, setMonths] = useState('');
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataSubmitted(true)
  }

  return (
    <React.Fragment>
      {dataSubmitted ? <ApiComponent monthsInAdvance={months} classificationName={genre} city={location} />
        :
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Select Genre Type:
              <input type='text' onChange={(e) => setGenre(e.target.value)} value={genre} />
            </label>
            <label>
              Choose Location Preference:
              <input type='text' onChange={(e) => setLocation(e.target.value)} value={location} />
            </label>
            <label>
              Months in advance:
              <select onChange={(e) => setMonths(e.target.value)} value={months}>
                <option value="1">1 month</option>
                <option value="2">2 months</option>
                <option value="3">3 months</option>
                <option value="4">4 months</option>
                <option value="5">5 months</option>
                <option value="6">6 months</option>
              </select>
            </label>
            <button>Find Events!</button>
          </form>
          {/* <button>Find Events!</button> */}
        </div>
      }
    </React.Fragment>
  );
}