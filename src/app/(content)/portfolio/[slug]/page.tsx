import Image from "next/image";
import { Metadata } from "next";
import { getDocumentSlugs, load } from "outstatic/server";

import { notFound } from "next/navigation";
import { parseISO, format } from "date-fns";

import { Layout } from "@/components/layout";

import type { Portfolio } from "../page";
import { absoluteUrl, markdownToHtml } from "../../utils";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page(params: Params) {
  const portfolio = await getData(params);
  return (
    <Layout.Portfolio>
      <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
        <Image
          alt={portfolio.title}
          src={portfolio?.coverImage || ""}
          fill
          className="object-cover object-center rounded-xl"
          priority
        />
      </div>
      {Array.isArray(portfolio?.category)
        ? portfolio.category.map(({ label }) => (
            <span
              key="label"
              className="inline-block bg-yellow-3 rounded-full px-2 py-1 text-xs font-semibold text-yellow-12 mr-2 mb-2"
            >
              {label}
            </span>
          ))
        : null}
      <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
        {portfolio.title}
      </h1>
      <div className="hidden md:block md:mb-12 text-gray-11">
        Written on{" "}
        <time>{format(parseISO(portfolio.publishedAt), "MMMM dd, yyyy")}</time>
        <p>By {portfolio?.author?.name || ""}</p>
      </div>
      <hr className="border-neutral-200 mt-10 mb-10" />
      <div className="max-w-4xl mx-auto">
        <div
          className="prose prose-gray lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: portfolio.content }}
        />
      </div>
    </Layout.Portfolio>
  );
}

async function getData({ params }: Params) {
  const db = await load();

  const portfolio = await db
    .find<Portfolio>({ collection: "portfolios", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "category",
    ])
    .first();

  if (!portfolio) {
    notFound();
  }

  const content = await markdownToHtml(portfolio.content);

  return {
    ...portfolio,
    content,
  };
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const portfolio = await getData(params);

  if (!portfolio) {
    return {};
  }

  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      type: "article",
      url: absoluteUrl(`/portfolios/${portfolio.slug}`),
      images: [
        {
          url: absoluteUrl(portfolio?.coverImage || "/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: portfolio.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: portfolio.title,
      description: portfolio.description,
      images: absoluteUrl(portfolio?.coverImage || "/images/og-image.png"),
    },
  };
}

export async function generateStaticParams() {
  const portfolios = getDocumentSlugs("portfolios");
  return portfolios.map((slug) => ({ slug }));
}
