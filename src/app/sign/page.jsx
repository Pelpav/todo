"use client";

import { LoginForm } from "../../components/loginform";
import { loginUser } from "@/utils/server.actions";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string().email("Email non valide"),
  password: z.string().min(8, "Mot de passe trop court"),
  confirm: z.string().min(8, "Mot de passe trop court"),
});

const sign = (props) => {
  async function handleSubmit(data, router) {
        const { username: email, password, confirm } = data;
        if (password !== confirm) {
          alert("Les mots de passe ne sont pas identiques");
          return;
        }
        console.log("OK");

        const response = await createUser({ email, password });

        if (response.success == false) {
          alert("Erreur innatendue");
        } else {
          router.push("/login");
        }
  }
  return (
    <>
      <h1>Création de compte</h1>
      <LoginForm
        shema={FormSchema}
        type="sign"
        handleSubmit={handleSubmit}
      ></LoginForm>
    </>
  );
};

export default sign;
