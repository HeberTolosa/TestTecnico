import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre tiene que tener por lo menos 2 caracteres" })
    .max(200, {
      message:
        "El nombre es exageradamente largo, tiene que tener menos de 200 caracteres",
    }),
  email: z
    .string()
    .email({ message: "Eso no parece un mail. Ingresar un mail valido" }),
  message: z
    .string()
    .min(5, {
      message: "El mensaje es demaciado corto, Ingresar minimo 5 caracteres",
    }),
});
