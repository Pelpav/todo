"use client";
import {  useUserContext } from "@/helpers/user.context";
import Image from "next/image";

export default function Accueil() {
  const { user } = useUserContext();
  console.log("User",user);
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>TO DO</h1>
      </main>
  );
}
