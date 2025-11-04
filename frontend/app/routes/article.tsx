import React from 'react';
import type { Route } from "./+types/home";
import Article from '~/blog/article';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb" },
    { name: "description", content: "Notre article !" },
  ];
}

export default function ArticlePage() {
  return <Article />;
}
