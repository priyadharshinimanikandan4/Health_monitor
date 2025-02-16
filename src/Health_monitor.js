import React, { useState } from 'react';
import axios from 'axios';

const HealthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    heartRate: '',
    bloodPressure: '',
    bmi: '',
    stressLevel: '',
    depression: false,
    symptoms: '',
    medicationReminders: '',
    weight: '',  // Added weight field
    height: '',  // Added height field
    temperature: '',  // Added temperature field
    hydrationLevel: '',  // Added hydration level field
    sleepQuality: '',  // Added sleep quality field
  });

  // Calculate BMI when weight and height are provided
  const calculateBMI = (weight, height) => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters); // BMI formula
      return bmi.toFixed(2); // Round to two decimal places
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Update BMI if weight or height is changed
    if (name === 'weight' || name === 'height') {
      const bmi = calculateBMI(formData.weight, formData.height);
      setFormData((prevState) => ({
        ...prevState,
        bmi: bmi,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.weight <= 0 || formData.height <= 0) {
      alert("Weight and height must be positive numbers!");
      return;
    }

    const calculatedBmi = calculateBMI(formData.weight, formData.height);
    const updatedData = { ...formData, bmi: calculatedBmi };

    try {
      const res = await axios.post("http://localhost:5000/health", updatedData);
      console.log("Data submitted:", res.data);
      alert("Health data submitted successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error submitting data!");
    }

    // Reset form data
    setFormData({
      name: '',
      age: '',
      heartRate: '',
      bloodPressure: '',
      bmi: '',
      stressLevel: '',
      depression: false,
      symptoms: '',
      medicationReminders: '',
      weight: '',
      height: '',
      temperature: '',
      hydrationLevel: '',
      sleepQuality: '',
    });
  };

  return (

    
    <div>
      <h2>Health Monitoring Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        {/* Age */}
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />

        {/* Heart Rate */}
        <label>Heart Rate (bpm):</label>
        <input
          type="number"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
          required
        />
        <br />

        {/* Blood Pressure */}
        <label>Blood Pressure:</label>
        <input
          type="text"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          required
        />
        <br />

        {/* Weight */}
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <br />

        {/* Height */}
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />
        <br />

        {/* Temperature */}
        <label>Temperature (°C):</label>
        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
        />
        <br />

        {/* Stress Level */}
        <label>Stress Level:</label>
        <input
          type="text"
          name="stressLevel"
          value={formData.stressLevel}
          onChange={handleChange}
        />
        <br />

        {/* Depression */}
        <label>Depression:</label>
        <input
          type="checkbox"
          name="depression"
          checked={formData.depression}
          onChange={() => setFormData((prevState) => ({
            ...prevState,
            depression: !prevState.depression,
          }))}
        />
        <label>Yes</label>
        <br />

        {/* Symptoms */}
        <label>Symptoms:</label>
        <input
          type="text"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
        />
        <br />

        {/* Medication Reminders */}
        <label>Medication Reminders:</label>
        <input
          type="text"
          name="medicationReminders"
          value={formData.medicationReminders}
          onChange={handleChange}
        />
        <br />

        {/* Hydration Level */}
        <label>Hydration Level (1-10):</label>
        <input
          type="number"
          name="hydrationLevel"
          value={formData.hydrationLevel}
          onChange={handleChange}
          min="1"
          max="10"
        />
        <br />

        {/* Sleep Quality */}
        <label>Sleep Quality (1-10):</label>
        <input
          type="number"
          name="sleepQuality"
          value={formData.sleepQuality}
          onChange={handleChange}
          min="1"
          max="10"
        />
        <br />

        {/* BMI */}
        <label>BMI:</label>
        <input
          type="text"
          name="bmi"
          value={formData.bmi}
          readOnly
        />
        <br />

        

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthForm;
