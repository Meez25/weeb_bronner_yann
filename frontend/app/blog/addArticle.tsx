import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { createPost } from "~/api/blog";

export default function AddArticle() {
  const { isAuthenticated, isLoading } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      window.location.href = "/connexion";
    }
  }, [isAuthenticated, isLoading]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload = {
      title: formData.get("title")?.toString() || "",
      excerpt: formData.get("excerpt")?.toString() || "",
      content: formData.get("content")?.toString() || "",
      is_published: formData.get("is_published") === "on",
    };

    try {
      await createPost(payload);
      setSuccess("Article créé avec succès !");
      formRef.current.reset();
    } catch (err: any) {
      setError(err.response?.data?.detail || "Erreur lors de la création de l'article.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <main className="bg-[#0F172A] min-h-screen px-4 py-10 flex items-center justify-center">
        <p className="text-gray-300 text-lg animate-pulse">Chargement...</p>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="bg-[#0F172A] min-h-screen px-4 py-10">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-white text-center font-extrabold text-4xl mb-8">
          Ajouter un article
        </h1>

        {success && (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-400">{success}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <form
          ref={formRef}
          className="border-[#AF52DE] border-2 text-[#C084FC] rounded-[20px] p-6 md:p-8 flex flex-col gap-6 bg-[#C084FC1A]"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-300">
              Titre *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Titre de l'article"
              className="border-b border-[#AF52DE] text-white py-3 px-2 bg-transparent placeholder:text-gray-500 focus:outline-none focus:border-purple-400 transition-colors text-lg"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="excerpt" className="text-sm font-medium text-gray-300">
              Résumé (optionnel)
            </label>
            <input
              type="text"
              id="excerpt"
              name="excerpt"
              placeholder="Bref résumé de l'article"
              className="border-b border-[#AF52DE] text-white py-3 px-2 bg-transparent placeholder:text-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-sm font-medium text-gray-300">
              Contenu *
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Écrivez votre article ici..."
              className="border border-[#AF52DE] rounded-lg text-white py-3 px-4 bg-transparent placeholder:text-gray-500 focus:outline-none focus:border-purple-400 transition-colors min-h-[300px] resize-y"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="is_published"
              name="is_published"
              className="w-5 h-5 accent-purple-600 cursor-pointer"
            />
            <label htmlFor="is_published" className="text-gray-300 cursor-pointer">
              Publier immédiatement
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#9333EA] rounded-lg h-12 text-white font-medium cursor-pointer hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Publication en cours..." : "Publier l'article"}
            </button>
            <button
              type="button"
              onClick={() => formRef.current?.reset()}
              className="flex-1 sm:flex-none sm:w-40 border border-gray-500 rounded-lg h-12 text-gray-300 font-medium cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
