import type { MetadataRoute } from "next";
import { business } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/welcome-facial", "/about", "/reviews", "/contact", "/policies"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
