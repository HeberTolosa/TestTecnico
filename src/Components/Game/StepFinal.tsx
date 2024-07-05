import Link from "next/link";
import React from "react";
type Props = {
  points: number;
  reset: () => void;
};
const messages = [
  "No fue muy bien que digamos, pero no hay problema, Todavia queda mucho por conocer",
  "Por lo menos una fue correcta, ahora solo queda conocernos mejor",
  "Podria estar mejor, pero no hay de que preocuparse",
  "Un 50% de todas las preguntas? nada mal",
  "Casi una puntuacion perfecta, eso si que es buena intuicion",
  "ACERTASTE EN TODO?? WOW!! ESO TIENE QUE SIGNIFICAR ALGO",
];
export default function StepFinal({ points, reset }: Props) {
  return (
    <div className="Game__PointsMainContainer">
      <p className="Game__PointsTitle">
        Tu puntaje: <span style={{ fontWeight: "bold" }}>{points}/5</span>
      </p>
      <div>
        <img
          src={points >= 1 ? "/starOn.svg" : "/starOff.svg"}
          alt=""
          className="Game__PointsStartIcon"
        />
        <img
          src={points >= 2 ? "/starOn.svg" : "/starOff.svg"}
          alt=""
          className="Game__PointsStartIcon"
        />
        <img
          src={points >= 3 ? "/starOn.svg" : "/starOff.svg"}
          alt=""
          className="Game__PointsStartIcon"
        />
        <img
          src={points >= 4 ? "/starOn.svg" : "/starOff.svg"}
          alt=""
          className="Game__PointsStartIcon"
        />
        <img
          src={points >= 5 ? "/starOn.svg" : "/starOff.svg"}
          alt=""
          className="Game__PointsStartIcon"
        />
      </div>
      <p className="Game__PointsMessageText">{messages[points]}</p>
      <p>
        muchas gracias por Jugar, espero que este pequeño proyecto te haya
        gustado tanto como a mi me gusto hacerlo. Fue un largo dia de programar
        el codigo, pero cuando uno se divierte el tiempo pasa volando.
      </p>
      <div>
        <button className="Game__PointsButtons" onClick={() => reset()}>
          Volver al jugar
        </button>

        <Link href={"/"}>
          <button className="Game__PointsButtons">Home</button>
        </Link>
      </div>
    </div>
  );
}
