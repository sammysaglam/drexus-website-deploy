import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  slug: string;
}

export interface Article {
  meta: ArticleMeta;
  content: MDXRemoteSerializeResult;
}

const contentDirectory = path.join(process.cwd(), "content");

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(contentDirectory, "insights", "articles", `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const mdxSource = await serialize(content, {
      parseFrontmatter: false,
    });

    return {
      meta: {
        ...(data as Omit<ArticleMeta, "slug">),
        slug,
      },
      content: mdxSource,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleMeta[] {
  const articlesDirectory = path.join(contentDirectory, "insights", "articles");

  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        ...(data as Omit<ArticleMeta, "slug">),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  return getAllArticles().filter((article) => article.tags.includes(tag));
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): ArticleMeta[] {
  const allArticles = getAllArticles();
  const currentArticle = allArticles.find((article) => article.slug === currentSlug);

  if (!currentArticle) {
    return [];
  }

  // Find articles with overlapping tags
  const relatedArticles = allArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      const commonTags = article.tags.filter((tag) => currentArticle.tags.includes(tag));
      return {
        article,
        relevance: commonTags.length,
      };
    })
    .filter(({ relevance }) => relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map(({ article }) => article);

  return relatedArticles;
}
