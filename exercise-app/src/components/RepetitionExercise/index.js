import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const paddedCount = count.toString().padStart(2, "0");

  return (
    <div>
      <h2>{name}</h2>

      <div className="display-box">
        {paddedCount}
      </div>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;