import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#services",
    "#about",
    "#experience",
    "#technologies",
    "#case-studies",
    "#pricing",
    "#blog",
    "#faq",
    "#contact",
  ];

  return sections.map((section) => ({
    url: `${site.url}/${section}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: section === "" ? 1 : 0.7,
  }));
}
