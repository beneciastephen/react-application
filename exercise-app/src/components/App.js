import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

function App() {
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Jump Rope", type: "duration" },
  ];

  const [selectedExercise, setSelectedExercise] = useState(null);

  const renderExercise = () => {
    if (!selectedExercise) return null;

    if (selectedExercise.type === "repetition") {
      return <RepetitionExercise name={selectedExercise.name} />;
    }

    if (selectedExercise.type === "duration") {
      return <DurationExercise name={selectedExercise.name} />;
    }
  };

  return (
    <div className="App">
      {!selectedExercise && (
        <div className="menu">
          <h1>Exercise Tracker</h1>
          {exercises.map((exercise) => (
            <button
              key={exercise.name}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise.name} ({exercise.type})
            </button>
          ))}
        </div>
      )}

      {selectedExercise && (
        <div className="exercise-container">
          {renderExercise()}

          <button onClick={() => setSelectedExercise(null)}>
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;