import React from 'react';
import type { Route } from "./+types/home";
import AddArticle from '~/blog/addArticle';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb" },
    { name: "Ajout d'un article", content: "Bienvenue chez Weeb !" },
  ];
}

export default function AddArticlePage() {
  return <AddArticle />;
}
