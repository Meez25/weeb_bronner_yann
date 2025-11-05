import { useLoaderData, useSearchParams } from "react-router";
import { Blog } from "~/blog/blog";
import { BlogHero } from "~/components/BlogHero";
import type { Route } from "../+types/root";
import { API_URL } from "~/helper";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const params = url.searchParams.toString();
  const res = await fetch(`${API_URL}posts/?${params}`);
  if (!res.ok) throw new Response("Erreur lors du chargement", { status: res.status });

  return res.json();
}

export default function BlogPage() {
  const data = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const { results: posts, next, previous } = data;

  const author = searchParams.get("author") || "";
  const q = searchParams.get("q") || "";
  const ordering = searchParams.get("ordering") || "-created_at";

  const updateFilter = (key: string, value: string) => {
    if (value) searchParams.set(key, value);
    else searchParams.delete(key);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <BlogHero />

      <div className="flex gap-4 justify-center py-4 flex-wrap">
        <input
          type="text"
          placeholder="Recherche..."
          value={q}
          onChange={(e) => updateFilter("q", e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Auteur"
          value={author}
          onChange={(e) => updateFilter("author", e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />

        <select
          value={ordering}
          onChange={(e) => updateFilter("ordering", e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 text-white"
        >
          <option value="-created_at">Plus récent → Plus ancien</option>
          <option value="created_at">Plus ancien → Plus récent</option>
        </select>
      </div>

      <Blog
        posts={posts}
        hasNext={!!next}
        hasPrevious={!!previous}
      />
    </div>
  );
}
