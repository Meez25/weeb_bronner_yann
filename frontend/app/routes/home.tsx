import React from 'react';
import type { Route } from "./+types/home";
import { Home } from "../home/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb" },
    { name: "description", content: "Bienvenue chez Weeb !" },
  ];
}

export default function HomePage() {
  return <Home />;
}
