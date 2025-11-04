import React from 'react';
import { BlogHero } from '~/components/BlogHero';
import BlogListArticle from '~/components/BlogListArticle';

export interface Post {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  author: string;
  slug: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  url: string
}

export interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <BlogHero />
      <BlogListArticle posts={posts} />
    </div>
  );
}
