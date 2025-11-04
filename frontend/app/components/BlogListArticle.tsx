import { Link } from "react-router"
import type { Post } from "~/blog/blog"

const BlogListArticle = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.length === 0 ? (
        <p className="text-center text-lg text-gray-300">Aucun article pour le moment.</p>
      ) : (
        posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="bg-[#1E293B] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-[#252f44] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 hover:text-purple-400">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt || post.content.substring(0, 100) + "..."}</p>
            </div>
            <small className="text-gray-400">Par {post.author} • {new Date(post.created_at).toLocaleDateString()}</small>
          </Link>
        ))
      )}
    </div>
  )
}

export default BlogListArticle
