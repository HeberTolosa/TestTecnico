"use client";
import useHome from "@/hooks/useHome";
import "../app/globals.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Link from "next/link";

export default function Home() {
  const {
    greetings,
    changeKey,
    keyGreeting,
    setEnterSections,
    enterSections,
    setName,
    name,
    error,
    sendName,
    nameValidate,
    sendValidate,
  } = useHome();
  setTimeout(() => {
    changeKey();
  }, 5000);
  return (
    <main>
      <SwitchTransition>
        <CSSTransition
          key={greetings[keyGreeting]}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <h1 className="Home__WelcomeTitle">{greetings[keyGreeting]}!</h1>
        </CSSTransition>
      </SwitchTransition>

      <p className="Home__WelcomeSubtitle">
        Bienvenido {name} a este test tecnico creado por{" "}
        <span style={{ fontWeight: "bold" }}>Heber Tolosa </span>
      </p>
      <div className="Home__RequerimentsContainer">
        <h3 className="Home__RequerimentsTitle">
          En este test se requieren diversos puntos a tener en cuenta:
        </h3>
        <ul className="Home__RequerimentsListContainer">
          <li className="Home__RequerimentsListItem">
            Una cabecera con el nombre del usuario y una imagen de perfil.
            <img src="/check.png" alt="" className="Home__IconCheck" />
          </li>
          <li className="Home__RequerimentsListItem">
            Una sección de "Sobre mí" con una breve descripción del usuario.
            <img src="/check.png" alt="" className="Home__IconCheck" />
          </li>
          <li className="Home__RequerimentsListItem">
            Una lista de intereses del usuario{" "}
            <img src="/check.png" alt="" className="Home__IconCheck" />.
          </li>
          <li className="Home__RequerimentsListItem">
            Un formulario de contacto con campos para nombre, email y mensaje.{" "}
            <img src="/check.png" alt="" className="Home__IconCheck" />
          </li>
        </ul>
      </div>

      <div className="Home__SectionsContainer">
        <p className="Home__SectionsText">
          Dejando estos puntos en claro, podemos seguir con las siguientes
          secciones de la pagina
        </p>
        {enterSections ? (
          <div>
            <p className="Home__SectionsDisabledNameText">
              WOW! parece que todavia no se tu nombre... Seria un buen comienzo
              decirme este para empezar a conocernos
            </p>
            {error ? (
              <p className="errorText">
                Parece que te olvidaste de colocar tu nombre
              </p>
            ) : null}
            <div className="Home__SectionsDisabledInputContainer">
              <input
                type="text"
                className={`Home__SectionsDisabledInput ${
                  error ? "inputError" : ""
                } `}
                placeholder="Ej: Pepito Peres"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className={`Home__SectionsDisabledInputButton ${
                  error ? "inputError" : ""
                }`}
                onClick={() => sendName(name)}
              >
                <img src="/send.svg" alt="" />
              </button>
            </div>
          </div>
        ) : null}
        {sendValidate ? (
          <p className="Home__SectionsConfirmName">
            Asi que te llamas {name}? Que buen nombre, ahora podemos continuar
          </p>
        ) : null}
        {nameValidate ? (
          <div className="Home__SectionsButtonsContainer">
            <Link href="/aboutMe">
              <button
                className={`Home__SectionsButton ${
                  enterSections ? "buttonDisabled" : ""
                }`}
              >
                <img src="/user.svg" alt="" />
                <p className="Home__SectionsButtonText">About me</p>
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`Home__SectionsButton ${
                  enterSections ? "buttonDisabled" : ""
                }`}
              >
                <img src="/contact.svg" alt="" />
                <p className="Home__SectionsButtonText">Contact</p>
              </button>
            </Link>
          </div>
        ) : (
          <div className="Home__SectionsButtonsContainer">
            <button
              className={`Home__SectionsButton ${
                enterSections ? "buttonDisabled" : ""
              }`}
              onClick={() => setEnterSections(true)}
            >
              <img src="/user.svg" alt="" />
              <p className="Home__SectionsButtonText">About me</p>
            </button>
            <button
              className={`Home__SectionsButton ${
                enterSections ? "buttonDisabled" : ""
              }`}
              onClick={() => setEnterSections(true)}
            >
              <img src="/contact.svg" alt="" />
              <p className="Home__SectionsButtonText">Contact</p>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
