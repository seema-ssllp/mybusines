
import React, { useEffect, useState } from 'react';

// Counter Component with dynamic speed logic
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let current = 1;
    let intervalTime;
    let step;

    // Speed logic based on target value
    if (target <= 10) {
      intervalTime = 100;
      step = 1;
    } else if (target <= 100) {
      intervalTime = 50;
      step = Math.floor(target / 25);
    } else if (target <= 500) {
      intervalTime = 20;
      step = Math.floor(target / 40);
    } else {
      intervalTime = 10;
      step = Math.floor(target / 60);
    }

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * step) + 1;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center px-6">
      <div className="text-5xl font-bold text-gray-700">{count}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};
const Working = () => {

  return (
    <>


    </>

  );
};

export default Working;
