import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; // Import required components
import axios from "axios";
import './App.css';  
import ContactUs from "./ContactUs";  // Import the ContactUs component
import AboutUs from "./AboutUS";      // Import the AboutUs component

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    heartRate: "",
    bloodPressure: "",
    bmi: "",
    stressLevel: "",
    depression: false,
    depressionAnswers: {
      sadness: false,
      hopelessness: false,
      fatigue: false,
      interestLoss: false,
      sleepDisturbance: false,
    },
    symptoms: [],
    medicationReminders: "",
    reminderTimes: [],
  });
  const [suggestion, setSuggestion] = useState("");

  // Your existing logic and form handling ...

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          {/* Define Routes */}
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/" exact>
            {/* Main App content */}
            <h1>Health Monitoring App</h1>
            {/* Your existing form and content here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
