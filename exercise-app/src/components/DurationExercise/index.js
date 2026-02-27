import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = remainingSeconds.toString().padStart(2, "0");

  return (
    <div>
      <h2>{name}</h2>

      <div className="display-box">
        {paddedMinutes}:{paddedSeconds}
      </div>

      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Stop / Reset</button>
    </div>
  );
}

export default DurationExercise;