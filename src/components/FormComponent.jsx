import React, { useState, useEffect } from "react"
import ApiComponent from "./ApiComponent"
import { Container, Card } from "react-bootstrap";

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
          <Container className="findEventsForm">
            <Card style={{contentAlign:'center', textAlign:'center'}}>
              <form onSubmit={handleSubmit}>
                <Card.Text>
                  Select Genre Type:
                  <input style={{marginLeft:'1rem'}} type='text' onChange={(e) => setGenre(e.target.value)} value={genre} />
                </Card.Text>
                <Card.Text>
                  Choose Location Preference:
                  <input style={{marginLeft:'1rem'}} type='text' onChange={(e) => setLocation(e.target.value)} value={location} placeholder="City"/>
                </Card.Text>
                <Card.Text>
                  Months in advance:
                  <select style={{marginLeft:'1rem'}} onChange={(e) => setMonths(e.target.value)} value={months}>
                    <option value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="4">4 months</option>
                    <option value="5">5 months</option>
                    <option value="6">6 months</option>
                  </select>
                </Card.Text>
                <button>Find Events!</button>
              </form>
            </Card>
          </Container>
        </div>
      }
    </React.Fragment>
  );
}