import React, { useState, useEffect } from "react";

function MedicationTimer() {
  const [medication, setMedication] = useState(""); // Store medication name
  const [duration, setDuration] = useState(""); // Store timer duration in minutes
  const [timerActive, setTimerActive] = useState(false); // Flag to track if timer is running
  const [timeLeft, setTimeLeft] = useState(null); // Time left in the timer

  useEffect(() => {
    let timer;

    // If the timer is active, decrease the time left every minute
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 60000); // Decrease every minute

      // Cleanup the interval when the component is unmounted or timer is stopped
      return () => clearInterval(timer);
    }

    // If timeLeft is 0, show a reminder
    if (timeLeft === 0 && timerActive) {
      alert(`Time to take your ${medication}!`);
      setTimerActive(false);
    }
  }, [timerActive, timeLeft, medication]);

  const handleStartTimer = () => {
    if (medication && duration > 0) {
      setTimeLeft(duration);
      setTimerActive(true);
    } else {
      alert("Please enter valid medication and duration.");
    }
  };

  const handleStopTimer = () => {
    setTimerActive(false);
    setTimeLeft(null);
  };

  return (
    <div className="medication-timer">
      <h2>Medication Timer</h2>
      
      <label>
        Medication Name:
        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication name"
        />
      </label>
      
      <label>
        Duration (in minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration"
        />
      </label>
      
      <button onClick={handleStartTimer} disabled={timerActive}>
        Start Timer
      </button>
      
      <button onClick={handleStopTimer} disabled={!timerActive}>
        Stop Timer
      </button>
      
      {timeLeft !== null && (
        <p>Time left: {timeLeft} minute{timeLeft > 1 ? "s" : ""}</p>
      )}
    </div>
  );
}

export default MedicationTimer;
