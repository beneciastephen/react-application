import React, { useState } from "react";

function RunningExercise() {
  const [startTime, setStartTime] = useState(null);
  const [laps, setLaps] = useState([]);

  const startRun = () => {
    setStartTime(Date.now());
    setLaps([]);
  };

  const recordLap = () => {
    if (!startTime) return;

    const currentTime = Date.now();
    const lapTime = ((currentTime - startTime) / 1000).toFixed(2);

    setLaps([...laps, lapTime]);
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <button onClick={startRun}>Start Run</button>
      <button onClick={recordLap}>Record Lap</button>

      <h3>Laps:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap} seconds</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;