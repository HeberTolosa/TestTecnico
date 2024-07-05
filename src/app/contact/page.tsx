"use client";
import React, { useEffect } from "react";
import "../globals.css";
import useContact from "@/hooks/useContact";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/validations/formSchema";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { name, modal, sendData } = useContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendData();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <h1 className="Contact__Title">
        Que bueno que quieras contactarte conmigo{" "}
        {name === "" ? "Visitante" : name}
      </h1>
      <p className="Contact__subTitle">
        Llenemos este formulario con informacion basica para contactarnos{" "}
      </p>
      <div className="Contact__FormContainer">
        <form
          action="POST"
          className="Contact__Form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="Contact__FormLabel" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className={`Contact__FormInput ${
              errors.name?.message && "inputError"
            }`}
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="errorText">{errors.name.message}</p>
          )}
          <label className="Contact__FormLabel" htmlFor="email ">
            Email
          </label>
          <input
            type="text"
            id="email"
            className={`Contact__FormInput ${
              errors.name?.message && "inputError"
            }`}
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="errorText">{errors.email.message}</p>
          )}
          <label className="Contact__FormLabel" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            className={`Contact__FormInput ${
              errors.name?.message && "inputError"
            }`}
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="errorText">{errors.message.message}</p>
          )}
          <button className="Contact__FormSubmitButton" type="submit">
            Submit
          </button>
        </form>
        {modal && (
          <div className="Contact__FormModalContainer">
            <p>mensaje enviado</p>
          </div>
        )}
      </div>
    </div>
  );
}
