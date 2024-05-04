"use client";

import { LoginForm } from "../../components/loginform";
import { createUser } from "@/utils/server.actions";

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
      <LoginForm type="sign" handleSubmit={handleSubmit}></LoginForm>
    </>
  );
};

export default sign;
