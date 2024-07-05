"use client";
import React from "react";
import "../globals.css";
import Step1 from "@/Components/Game/Step1";
import useGame from "@/hooks/useGame";
import StepItem from "@/Components/Game/StepItem";
import StepFinal from "@/Components/Game/StepFinal";

export default function page() {
  const { count, nextStep, showAnswer, points, reset } = useGame();
  return (
    <div>
      {count === 0 && <Step1 />}
      {count === 1 && (
        <StepItem
          question="Cual es mi comida favorita?"
          imgItem1="/burguer.jpg"
          nameItem1="Hamburguesa"
          imgItem2="/fideos.jpg"
          nameItem2="Fideos"
          nextStep={nextStep}
          correct={1}
          showAnswer={showAnswer}
        />
      )}
      {count === 2 && (
        <StepItem
          question="Cual es mi consola favorita?"
          imgItem1="/switch.webp"
          nameItem1="Nintendo Switch"
          imgItem2="/playstation.jpg"
          nameItem2="Playstation 5"
          nextStep={nextStep}
          correct={1}
          showAnswer={showAnswer}
        />
      )}
      {count === 3 && (
        <StepItem
          question="Cual es mi clima favorito?"
          imgItem1="/frio.webp"
          nameItem1="Frio"
          imgItem2="/calor.webp"
          nameItem2="Calor"
          nextStep={nextStep}
          correct={2}
          showAnswer={showAnswer}
        />
      )}
      {count === 4 && (
        <StepItem
          question="Cual es mi genero de videojuegos favorito?"
          imgItem1="/mmorpg.jpg"
          nameItem1="MMORPG"
          imgItem2="/shooter.jpg"
          nameItem2="Shooter"
          nextStep={nextStep}
          correct={1}
          showAnswer={showAnswer}
        />
      )}
      {count === 5 && (
        <StepItem
          question="Cual es mi lugar favorito?"
          imgItem1="/playa.webp"
          nameItem1="Playa"
          imgItem2="/cascada.jpg"
          nameItem2="Cascada"
          nextStep={nextStep}
          correct={2}
          showAnswer={showAnswer}
        />
      )}

      {count === 0 && (
        <div className="Game__ReadyButtonContainer">
          <button className="Game__ReadyButton" onClick={() => nextStep(false)}>
            Listo
          </button>
        </div>
      )}
      {count < 6 ? (
        <p className="Game__Count">Preguntas {count}/5</p>
      ) : (
        <StepFinal points={points} reset={reset} />
      )}
    </div>
  );
}
