import { useEffect } from "react";
import { SITE_URL, DEFAULT_SEO } from "../seo";

const upsertMeta = (key, content, attr = "name") => {
  if (!content) return;

  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;

  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const upsertJsonLd = (jsonLd) => {
  const id = "json-ld-seo";
  let script = document.getElementById(id);

  if (!jsonLd) {
    if (script) script.remove();
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("id", id);
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(jsonLd);
};

const Seo = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords,
  robots = "index, follow",
  jsonLd,
}) => {
  useEffect(() => {
    const seoTitle = title || DEFAULT_SEO.title;
    const seoDescription = description || DEFAULT_SEO.description;
    const seoImage = image || DEFAULT_SEO.image;
    const canonical = new URL(path, SITE_URL).toString();

    document.title = seoTitle;

    upsertMeta("description", seoDescription);
    upsertMeta("keywords", keywords);
    upsertMeta("robots", robots);
    upsertMeta("og:title", seoTitle, "property");
    upsertMeta("og:description", seoDescription, "property");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:url", canonical, "property");
    upsertMeta("og:image", seoImage, "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", seoTitle);
    upsertMeta("twitter:description", seoDescription);
    upsertMeta("twitter:image", seoImage);
    upsertLink("canonical", canonical);
    upsertJsonLd(jsonLd);
  }, [title, description, path, image, type, keywords, robots, jsonLd]);

  return null;
};

export default Seo;
