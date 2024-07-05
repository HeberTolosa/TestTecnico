import useGame from "@/hooks/useGame";
import React from "react";
type Props = {
  question: string;
  imgItem1: string;
  nameItem1: string;
  imgItem2: string;
  nameItem2: string;
  nextStep: (value: boolean) => void;
  correct: number;
  showAnswer: boolean;
};

export default function StepItem({
  question,
  imgItem1,
  nameItem1,
  imgItem2,
  nameItem2,
  nextStep,
  correct,
  showAnswer,
}: Props) {
  return (
    <div className="Game__MainContainer">
      <h1 className="Game__MainTitle">Elije una opcion</h1>
      <p className="Game__QuestionText">{question}</p>
      <div className="Game__ItemsMainContainer">
        <button
          className={`Game__ItemSelectContainer ${
            showAnswer && correct === 1 ? "Game__ItemsMainContainerCorrect" : ""
          } ${
            showAnswer && correct === 2 ? "Game__ItemsMainContainerWrong" : ""
          }`}
          onClick={() => {
            correct === 1 ? nextStep(true) : nextStep(false);
          }}
        >
          <img src={imgItem1} alt="" className="Game__ItemSelectImg" />
          <p className="Game__ItemSelectText">{nameItem1}</p>
        </button>
        <p className="Game__VersusText">vs</p>
        <button
          className={`Game__ItemSelectContainer ${
            showAnswer && correct === 2 ? "Game__ItemsMainContainerCorrect" : ""
          } ${
            showAnswer && correct === 1 ? "Game__ItemsMainContainerWrong" : ""
          }`}
          onClick={() => {
            correct === 2 ? nextStep(true) : nextStep(false);
          }}
        >
          <img src={imgItem2} alt="" className="Game__ItemSelectImg" />
          <p className="Game__ItemSelectText">{nameItem2}</p>
        </button>
      </div>
    </div>
  );
}
