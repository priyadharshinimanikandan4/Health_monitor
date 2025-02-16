import React from "react";

function UserProfile({ users, symptomSuggestions }) {
  // Depression suggestions (customized)
  const depressionSuggestions = {
    sadness: "Consider talking to a mental health professional. Sharing your feelings with a close friend or family member can help.",
    hopelessness: "Remember, there is always hope. Professional therapy and support can help you regain a sense of purpose.",
    worthlessness: "You are valuable, and you matter. Take time for self-care and seek help if needed.",
    lossOfInterest: "Try re-engaging in activities you once enjoyed. Small steps towards finding fulfillment can help.",
    fatigue: "Ensure you're getting enough rest. Gentle physical activities, like walking, may help boost your energy.",
    guilt: "Talk to someone you trust or a counselor to help process these feelings and understand your situation.",
    difficultyConcentrating: "Try breaking tasks into smaller pieces and take regular breaks. Mindfulness practices may help with focus.",
    sleepProblems: "Try creating a consistent sleep routine and limit screen time before bed.",
    appetiteChanges: "Try maintaining a balanced diet, eating smaller meals, and seeking support if appetite changes persist."
  };

  // Stress level suggestions
  const stressLevelSuggestions = {
    low: "You are managing well. Keep up with your self-care and healthy routines.",
    moderate: "It's good to manage your stress with relaxation techniques. Consider deep breathing or meditation.",
    high: "Consider seeking support if stress becomes overwhelming. Try to practice stress management techniques or talk to a professional."
  };

  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Weight:</strong> {user.weight}</p>
            <p><strong>Height:</strong> {user.height}</p>
            <p><strong>Symptoms:</strong> {user.symptoms && user.symptoms.length > 0 ? user.symptoms.join(", ") : "No symptoms listed"}</p>
            <p><strong>BMI:</strong> {user.bmi}</p>

            {/* Display Depression Answers */}
            <p><strong>Depression:</strong></p>
            <ul>
              {Object.keys(user.depressionAnswers).map((key) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> 
                  {user.depressionAnswers[key] ? "Yes" : "No"}
                </li>
              ))}
            </ul>

            {/* Display Depression Suggestions */}
            <h3>Depression Suggestions</h3>
            <ul>
              {Object.keys(user.depressionAnswers)
                .filter((key) => user.depressionAnswers[key]) // Only show suggestions for symptoms marked as "Yes"
                .map((key) => (
                  <li key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {depressionSuggestions[key]}
                  </li>
                ))}
            </ul>

            {/* Display Symptom Suggestions */}
            <h3>Suggestions</h3>
            <ul>
              {user.symptoms && user.symptoms.length > 0
                ? user.symptoms.map((symptom, index) => (
                    <li key={index}>
                      <strong>{symptom}:</strong> {symptomSuggestions[symptom] || "No specific suggestion"}
                    </li>
                  ))
                : "No suggestions available"}
            </ul>

            {/* Display Stress Level and Suggestion */}
             <p>{user.stressLevel}</p>
            <p> {stressLevelSuggestions[user.stressLevel]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
