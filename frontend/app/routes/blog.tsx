import React, { useEffect, useState } from 'react';
import type { Route } from "./+types/home";
import { Blog } from '~/blog/blog';
import { API_URL } from '~/helper';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weeb" },
    { name: "description", content: "Bienvenue sur notre blog !" },
  ];
}

export default function ContactPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(API_URL + "posts/");
        const articles = await response.json();
        setPosts(articles.results);
      } catch (err) {
        console.error("Erreur lors de la récupération des posts :", err);
      }
    };

    getPosts();

  }, [])
  return <Blog posts={posts} />;
}
