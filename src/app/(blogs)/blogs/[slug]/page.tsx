import Image from "next/image";
import { Metadata } from "next";
import { OstDocument } from "outstatic";
import { getDocumentSlugs, load } from "outstatic/server";
import { notFound } from "next/navigation";
import { parseISO, format } from "date-fns";

import { Layout, Header } from "@/components/Layout";

type Blog = {
  tags: { value: string; label: string }[];
} & OstDocument;

interface Params {
  params: {
    slug: string;
  };
}

function absoluteUrl(path: string) {
  return `${
    process.env?.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${path}`;
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const blog = await getData(params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: absoluteUrl(`/blogs/${blog.slug}`),
      images: [
        {
          url: absoluteUrl(blog?.coverImage || "/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: absoluteUrl(blog?.coverImage || "/images/og-image.png"),
    },
  };
}

export default async function Blog(params: Params) {
  const blog = await getData(params);
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <Header />
        <article className="mb-32">
          <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
            <Image
              alt={blog.title}
              src={blog?.coverImage || ""}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {Array.isArray(blog?.tags)
            ? blog.tags.map(({ label }) => (
                <span
                  key="label"
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {label}
                </span>
              ))
            : null}
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            {blog.title}
          </h1>
          <div className="hidden md:block md:mb-12 text-slate-600">
            Written on
            <time>{format(parseISO(blog.publishedAt), "MMMM dd, yyyy")}</time>
            {blog?.author?.name || ""}.
          </div>
          <hr className="border-neutral-200 mt-10 mb-10" />
          <div className="max-w-2xl mx-auto">
            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>
      </div>
    </Layout>
  );
}

async function getData({ params }: Params) {
  const db = await load();

  const blog = await db
    .find<Blog>({ collection: "blogs", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "tags",
    ])
    .first();

  if (!blog) {
    notFound();
  }

  const content = await markdownToHtml(blog.content);

  return {
    ...blog,
    content,
  };
}

export async function generateStaticParams() {
  const blogs = getDocumentSlugs("blogs");
  return blogs.map((slug) => ({ slug }));
}
