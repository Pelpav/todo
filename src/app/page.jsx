"use client";
import Accueil from "@/components/accueil";
import { UserProvider, useUserContext } from "@/helpers/user.context";
import Image from "next/image";

export default function Home() {
  return (
    <UserProvider>
      <Accueil />
    </UserProvider>
  );
}
