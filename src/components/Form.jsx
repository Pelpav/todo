"use client";
import { useUserContext } from "@/helpers/user.context";
import { LoginForm } from "./loginform";

const Form = ({ shema }) => {
  const { addUser } = useUserContext();
  async function handleSubmit(data, router) {
    const { username: email, password } = data;

    const response = await loginUser({ email, password });

    if (!response.success) {
      alert("Erreur innatendue");
    } else {
      console.log(response);
      addUser();
      router.push("/");
    }
  }

  return <LoginForm shema={shema} handleSubmit={handleSubmit}></LoginForm>;
};

export default Form;
