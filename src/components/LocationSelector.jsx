//npm install react-datepicker

import React, { useState } from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";


function LocationSelector() {
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState("postalCode");

  const userPostalCode = "yourUserPostalCode";

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const fetchData = () => {
    //change to fetch statement or install and import from jQuery
    if (filter === "postalCode") {
      $.ajax({
        type: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.REACT_APP_API_KEY}&postalCode=${userPostalCode}`,
        async: true,
        dataType: "json",
        success: function (json) {
          console.log(json);
          // Parse the response.
          // Do other things.
        },
        error: function (xhr, status, err) {
          console.error("API request failed:", status, err);
          setError("Failed to fetch events. Please try again later.");
        }
      });
    } else if (filter === "radius") {
      $.ajax({
         type: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.REACT_APP_API_KEY}&radius=${userRadius}`,
        async: true,
        dataType: "json",
       success: function (json) {
         console.log(json);
        // Parse the response.
        // Do other things.
        },
        error: function (xhr, status, err) {
          console.error("API request failed:", status, err);
          setError("Failed to fetch events. Please try again later.");
        }
       });
    }
  }

  const handleFetchData = () => {
    fetchData();
  }

//   if (filter === "postalCode") {
//     $.ajax({
//       type: "GET",
//       url: `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.REACT_APP_API_KEY}&postalCode=${userPostalCode}`,
//       async: true,
//       dataType: "json",
//       success: function (json) {
//         console.log(json);
//         // Parse the response.
//         // Do other things.
//       },
//       error: function (xhr, status, err) {
//         console.error("API request failed:", status, err);
//         setError("Failed to fetch events. Please try again later.");
//       }
//     });
//   } else if (filter === "radius") {
//     $.ajax({
//        type: "GET",
//       url: `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.REACT_APP_API_KEY}&radius=${userRadius}`,
//       async: true,
//       dataType: "json",
//      success: function (json) {
//        console.log(json);
//       // Parse the response.
//       // Do other things.
//       },
//       error: function (xhr, status, err) {
//         console.error("API request failed:", status, err);
//         setError("Failed to fetch events. Please try again later.");
//       }
//      });
//   }

  return (
    <div>
      <label>
        Filter:
        <select value={filter} onChange={handleFilterChange}>
          <option value="postalCode">Postal Code</option>
          <option value="radius">Radius</option>
        </select>
      </label>

      {filter === "radius" && (
        <div>
          <label>
            Select Date:
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
          </label>
        </div>
      )}

      <button onClick={handleFetchData}>Fetch Data</button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LocationSelector;

// postalCode
// radius
// unit = miles
//stateCode?   &stateCode=${userStateAbbreviation}, assuming USA
