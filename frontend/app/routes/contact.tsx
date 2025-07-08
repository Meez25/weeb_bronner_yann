import React from 'react';
import type { Route } from "./+types/home";
import { Contact } from '~/contact/contact';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb" },
    { name: "description", content: "Bienvenue chez Weeb !" },
  ];
}

export default function ContactPage() {
  return <Contact />;
}
