import React from "react";
import HealthForm from "./HealthForm";
import MedicationTimer from "./Medicationtimer"; // Import MedicationTimer

/**
 * Dashboard Component
 */
function Dashboard({
  formData,
  setFormData,
  suggestion,
  setSuggestion,
  medicationMapping,
  handleSubmit,
}) {
  // Inline styles for the component
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '30px',
    },
    subheading: {
      fontSize: '1.8rem',
      color: '#2980b9',
      textAlign: 'center', // Center-align the subheading
    },
    medicationSection: {
      marginTop: '30px',
      textAlign: 'center', // Center-align the entire medication section
    },
    medicationSubheading: {
      fontSize: '1.8rem',
      color: '#16a085',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}></h2>

      {/* HealthForm Section */}
      <div style={styles.section}>
        <h3 style={styles.subheading}></h3>
        <HealthForm
          formData={formData}
          setFormData={setFormData}
          suggestion={suggestion}
          setSuggestion={setSuggestion}
          medicationMapping={medicationMapping}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Medication Timer Section */}
      <div style={styles.medicationSection}>
        <h3 style={styles.medicationSubheading}></h3>
        <MedicationTimer />
      </div>
    </div>
  );
}

export default Dashboard;
