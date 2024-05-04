"use client";

import { UserProvider, useUserContext } from "@/helpers/user.context";
import { LoginForm } from "../../components/loginform";
import { loginUser } from "@/utils/server.actions";
import { z } from "zod";
import { Form } from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().email("Email non valide"),
  password: z.string().min(8, "Mot de passe trop court"),
});

const login = (props) => {
  return (
    <UserProvider>
          <h1>Login de compte</h1>
          
      <Form shema={FormSchema} />
    </UserProvider>
  );
};

export default login
