import React, { useState, useEffect } from 'react';

function HealthForm({
  formData,
  setFormData,
  medicationMapping,
  handleSubmit,
}) {
  const [timer, setTimer] = useState(null);
  const [symptomQuestions, setSymptomQuestions] = useState([]);
  const [medicationTime, setMedicationTime] = useState(null);

  const symptomQuestionMapping = {
    fever: [
      "How long have you had the fever?",
      "Have you had chills or sweats?",
      "What is your current temperature?"
    ],
    cough: [
      "How long have you had the cough?",
      "Is it dry or productive (with mucus)?",
      "Are you experiencing any shortness of breath?"
    ],
    throatPain: [
      "How long have you had throat pain?",
      "Do you have difficulty swallowing?",
      "Is your throat red or swollen?"
    ],
    headache: [
      "How long have you had the headache?",
      "Is it localized or does it affect the entire head?",
      "Do you have any sensitivity to light or sound?"
    ]
  };

  const depressionSuggestions = {
    sadness: "Consider talking to a mental health professional. It might help to share your feelings with a close friend or family member.",
    hopelessness: "Remember, it's okay to seek help. You are not alone. Professional therapy can provide support.",
    worthlessness: "Try not to be too hard on yourself. Consider self-care activities that make you feel good.",
    lossOfInterest: "Engage in a hobby or activity you once enjoyed. Small steps can bring back a sense of fulfillment.",
    fatigue: "Ensure you're getting enough sleep and eating nutritious meals. Try gentle exercise like walking.",
    guilt: "It might help to talk to someone you trust or seek professional guidance to work through these feelings.",
    difficultyConcentrating: "Break tasks into smaller steps and take breaks. Mindfulness exercises can help improve focus.",
    sleepProblems: "Consider creating a relaxing bedtime routine and reducing screen time before bed.",
    appetiteChanges: "Try eating smaller meals throughout the day and focus on a balanced diet. Seek support if needed."
  };

  const stressLevelSuggestions = {
    low: "It's great to hear that you're feeling less stressed. Keep up with your healthy habits!",
    medium: "You may benefit from incorporating relaxation techniques like deep breathing or yoga into your routine.",
    high: "Consider talking to a professional to help manage your stress. Regular physical activity can also be helpful."
  };

  const handleSymptomChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setFormData({ ...formData, symptoms: selectedOptions });

    const questions = selectedOptions.flatMap(symptom => symptomQuestionMapping[symptom] || []);
    setSymptomQuestions(questions);
  };

  const handleDepressionChange = (key) => {
    setFormData((prevState) => {
      const newDepressionAnswers = {
        ...prevState.depressionAnswers,
        [key]: !prevState.depressionAnswers[key],
      };

      return {
        ...prevState,
        depressionAnswers: newDepressionAnswers,
      };
    });
  };

  const handleStressLevelChange = (e) => {
    setFormData({ ...formData, stressLevel: e.target.value });
  };

  const startTimer = () => {
    if (timer) {
      clearInterval(timer);
    }

    const currentTime = new Date();
    const medicationReminderTime = new Date(currentTime.getTime() + 4 * 60 * 60 * 1000); // 4 hours later
    setMedicationTime(medicationReminderTime);

    const newTimer = setInterval(() => {
      alert("It's time to take your medication!");
    }, 4 * 60 * 60 * 1000); // Every 4 hours

    setTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
    startTimer();
  };

  return (
    <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
      <fieldset>
        <legend>Personal Details</legend>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ padding: '8px', margin: '5px 0' }}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
            style={{ padding: '8px', margin: '5px 0' }}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Health Metrics</legend>
        <label>
          Weight (kg):
          <input
            type="number"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            style={{ padding: '8px', margin: '5px 0' }}
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            style={{ padding: '8px', margin: '5px 0' }}
          />
        </label>
        <label>
          Symptoms:
          <select
            multiple
            value={formData.symptoms}
            onChange={handleSymptomChange}
            style={{ padding: '8px', margin: '5px 0' }}
          >
            <option value="fever">Fever</option>
            <option value="cough">Cough</option>
            <option value="throatPain">Throat Pain</option>
            <option value="headache">Headache</option>
          </select>
        </label>
      </fieldset>

      {symptomQuestions.length > 0 && (
        <fieldset>
          <legend>Symptom Questions</legend>
          {symptomQuestions.map((question, index) => (
            <div key={index}>
              <label>
                {question}
                <input
                  type="text"
                  value={formData[`question_${index}`] || ""}
                  onChange={(e) => setFormData({ ...formData, [`question_${index}`]: e.target.value })}
                  style={{ padding: '8px', margin: '5px 0' }}
                />
              </label>
            </div>
          ))}
        </fieldset>
      )}

      <fieldset>
        <legend>Mental Health</legend>
        <label>
          Depression:
          <ul>
            {Object.keys(formData.depressionAnswers).map((key) => (
              <li key={key}>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.depressionAnswers[key]}
                    onChange={() => handleDepressionChange(key)}
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </li>
            ))}
          </ul>
        </label>

        <div style={{ marginTop: '10px' }}>
          <h4>Depression Suggestions</h4>
          <ul>
            {Object.keys(formData.depressionAnswers)
              .filter((key) => formData.depressionAnswers[key])
              .map((key) => (
                <li key={key}>{depressionSuggestions[key]}</li>
              ))}
          </ul>
        </div>
      </fieldset>

      <fieldset>
        <legend>Stress Level</legend>
        <label>
          Stress Level:
          <select
            value={formData.stressLevel}
            onChange={handleStressLevelChange}
            style={{ padding: '8px', margin: '5px 0' }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        {formData.stressLevel && (
          <div style={{ marginTop: '10px' }}>
            <h4>Stress Management Suggestions</h4>
            <p>{stressLevelSuggestions[formData.stressLevel]}</p>
          </div>
        )}
      </fieldset>

      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Submit</button>

      {medicationTime && (
        <div>
          <p>Next medication time: {medicationTime.toLocaleString()}</p>
        </div>
      )}
    </form>
  );
}

export default HealthForm;
