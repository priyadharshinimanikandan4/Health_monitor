import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Home from "./Home";
import ContactUs from "./ContactUs";
import UserProfile from "./UserProfile";

/**
 * Symptom Suggestions Mapping
 */
const symptomSuggestions = {
  fever: "Stay hydrated and rest. If symptoms persist, consult a doctor.",
  cough: "Use a cough syrup and rest. Drink warm fluids.",
  throatPain: "Lozenges and warm saltwater gargles may help.",
  headache: "Take an over-the-counter pain reliever and rest in a dark room.",
  fatigue: "Ensure adequate sleep and rest. Eat nutritious food.",
  sadness: "Consider talking to a mental health professional for support.",
  sleepProblems: "Try relaxation techniques before bed and avoid screens.",
  appetiteChanges: "Ensure you're eating a balanced diet. Consult a doctor if it continues.",
  // Add more symptoms and their suggestions here
};

/**
 * Stress Level Suggestions Mapping
 */
const stressLevelSuggestions = {
  low: "Consider practicing relaxation techniques like deep breathing or yoga.",
  moderate: "Take breaks, engage in physical activity, and avoid overloading yourself.",
  high: "It might be helpful to talk to a mental health professional for support.",
};

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    symptoms: [],
    stressLevel: "low", // Default stress level
    depressionAnswers: {
      sadness: false,
      hopelessness: false,
      worthlessness: false,
      lossOfInterest: false,
      fatigue: false,
      guilt: false,
      difficultyConcentrating: false,
      sleepProblems: false,
      appetiteChanges: false,
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (formData.weight <= 0 || formData.height <= 0) {
      alert("Weight and height must be positive numbers!");
      return;
    }

    const calculatedBmi = calculateBMI(formData.weight, formData.height);

    const updatedData = {
      ...formData,
      bmi: calculatedBmi,
    };

    try {
      const res = await axios.post("http://localhost:5000/users", updatedData);
      setUsers([...users, res.data]);
    } catch (error) {
      console.error("Error posting data:", error);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData());
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/profile"
              element={
                <UserProfile
                  users={users}
                  symptomSuggestions={symptomSuggestions}
                  stressLevelSuggestions={stressLevelSuggestions} // Pass stress level suggestions
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header>
      <h1>Health Monitoring App</h1>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/profile">User Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function calculateBMI(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function initialFormData() {
  return {
    name: "",
    age: "",
    weight: "",
    height: "",
    symptoms: [],
    stressLevel: "low", // Default stress level
    depressionAnswers: {
      sadness: false,
      hopelessness: false,
      worthlessness: false,
      lossOfInterest: false,
      fatigue: false,
      guilt: false,
      difficultyConcentrating: false,
      sleepProblems: false,
      appetiteChanges: false,
    },
  };
}

export default App;
