import React from "react";
import "../globals.css";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div>
      <div className="AboutMe__ImageProfileContainer">
        <img className="AboutMe__ImageProfile" src="/profile.jpeg" alt="" />
      </div>
      <h3 className="AboutMe__ProfileName">Heber Tolosa</h3>
      <h5 className="AboutMe__SubTitle">(Desarrollador front-end)</h5>
      <div className="AboutMe__ResumeContainer">
        <p className="AboutMe__ResumeTitle">un resumen sobre mi vida:</p>
        <p className="AboutMe__ResumeText">
          Mi nombre es Heber, Nacido en 1998{" "}
          <span style={{ fontWeight: "bold" }}>(26años)</span>. Originario de la
          ciudad de Rosario, Argentina. <br /> Apasionado por los videojuegos ,
          la danza urbana , la cultura hiphop y la programacion
          <span>(una combinacion un tanto extraña)</span>
          <br />
          Comence en mi camino a la programacion cerca de los 10 años, creando
          pequeños videojuegos que solo mostraba para mi familia (mi hermano y
          mi madre)
          <br />
          con estos pequeños pasos y sin darme cuenta, me vi aprendiendo
          lenguaje orientado a objetos, puntualmente c# en una aplicacion
          llamada rpg maker. Con el tiempo comence a hacer sitios webs por
          diversion y alojando algun que otro servidor de algun videojuego para
          jugar con mis amigos.
          <br /> Cerca de 2018 decidi adentrarme en la facultad de programacion
          para buscar profesionalizarme al respecto de algo que para mi siempre
          fue una diversion. En 2022 tuve mi primer trabajo oficial para una
          empresa de california llamada "iMCreate", donde pude adquirir mucho
          conocimiento y poner a prueba los ya aprendidos hasta entonces
          <br /> Actualmente la danza me trajo a brasil y hoy dia resido en la
          ciudad de sao paulo, ahora que consegui adaptarme , estoy volviendo a
          programar luego de un merecido descanso
        </p>
      </div>
      <p className="AboutMe__IntroductionGameText">
        Pero seamos sinceros, a nadie le gusta leer tanto texto. entonces te voy
        a proponer jugar un juego para conocer mas sobre mis gustos personales
        <br />
        resolvamos una simple trivia para conocernos mejor
      </p>

      <Link href={"/game"}>
        <div className="AboutMe__StartButtonContainer">
          <button className="AboutMe__StartButton">Comenzar</button>
        </div>
      </Link>
    </div>
  );
}
