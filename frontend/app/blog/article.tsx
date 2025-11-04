import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Post } from "~/blog/blog";
import { API_URL } from "~/helper";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const res = await fetch(API_URL + `posts/${slug}/`);
      if (!res.ok) return;
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post)
    return (
      <p className="text-center text-gray-300 mt-16 text-lg animate-pulse">
        Chargement...
      </p>
    );

  return (
    <div className="max-w-[900px] mx-auto px-4 py-12">
      <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white hover:text-purple-400 transition-colors duration-300">
          {post.title}
        </h1>
        <p className="text-gray-400 mb-6">
          Par <span className="font-medium">{post.author}</span> •{" "}
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <div className="prose prose-invert text-gray-200">
          {post.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
