import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("src/pages/Home.tsx"),
  route("projects", "src/pages/Projects.tsx"),
  route("contact", "src/pages/Contact.tsx"),
] satisfies RouteConfig;
