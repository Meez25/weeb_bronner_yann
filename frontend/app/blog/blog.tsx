import React from 'react';
import { Link, useSearchParams } from 'react-router';
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
  url: string;
}

interface BlogProps {
  posts: Post[];
  loading?: boolean;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function Blog({ posts, loading, hasNext, hasPrevious }: BlogProps) {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  // Fonction pour créer un lien en gardant tous les filtres
  const createPageLink = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    return `?${params.toString()}`;
  };

  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <div className="flex justify-center gap-6 py-6">
        {hasPrevious ? (
          <Link
            to={createPageLink(currentPage - 1)}
            prefetch="intent"
            preventScrollReset
            className="w-38 text-center px-4 py-2 rounded-lg font-medium bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            ← Précédent
          </Link>
        ) : (
          <span className="w-38 text-center px-4 py-2 rounded-lg font-medium bg-gray-600 text-gray-300 cursor-not-allowed">
            ← Précédent
          </span>
        )}

        {hasNext ? (
          <Link
            to={createPageLink(currentPage + 1)}
            prefetch="intent"
            preventScrollReset
            className="w-38 text-center px-4 py-2 rounded-lg font-medium bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Suivant →
          </Link>
        ) : (
          <span className="w-38 text-center px-4 py-2 rounded-lg font-medium bg-gray-600 text-gray-300 cursor-not-allowed">
            Suivant →
          </span>
        )}
      </div>

      {loading ? (
        <p className="text-center py-8 text-gray-400">Chargement des articles...</p>
      ) : (
        <BlogListArticle posts={posts} />
      )}
    </div>
  );
}
