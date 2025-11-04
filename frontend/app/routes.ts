import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("connexion", "./routes/login.tsx"),
  route("blog", "./routes/blog.tsx"),
  route("blog/:slug", "./routes/article.tsx")
] satisfies RouteConfig;
