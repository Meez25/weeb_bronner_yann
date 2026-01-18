import React from 'react';
import type { Route } from "./+types/home";
import { Register } from '~/register/register';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb Connexion" },
    { name: "description", content: "Connexion à weeb !" },
  ];
}

export default function LoginPage() {
  return <Register />;
}
