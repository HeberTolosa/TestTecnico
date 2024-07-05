import React, { useState } from "react";

export default function useGame() {
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const nextStep = (value: boolean) => {
    setShowAnswer(true);
    setTimeout(() => {
      setCount(count + 1);
      setShowAnswer(false);
    }, 1000);
    if (value) {
      setPoints((prev) => prev + 1);
    }
  };
  const reset = () => {
    setPoints(0);
    setCount(0);
  };
  return { count, nextStep, showAnswer, points, reset };
}
