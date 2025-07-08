import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("connexion", "./routes/login.tsx")
] satisfies RouteConfig;
