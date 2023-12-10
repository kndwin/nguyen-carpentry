import Image from "next/image";
import { getDocuments } from "outstatic/server";
import { OstDocument } from "outstatic";
import { parseISO, format } from "date-fns";
import Link from "next/link";

import { Layout } from "@/components/layout";

export type Portfolio = {
  category: { value: string; label: string }[];
} & OstDocument;

const portfolios = getDocuments("portfolios", [
  "title",
  "slug",
  "status",
  "description",
  "category",
  "coverImage",
]);

export default async function Portfolios() {
  return (
    <Layout.Default>
      <div className="py-20 pt-8">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
          Our work
        </h1>
        <p className="leading-relaxed text-base max-w-prose">
          {`Whether it's dark leather chesterfields or white gloss kitchen cabinets. Our work below has delieviered to satistfied customers`}
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <li key={portfolio.slug}>
            <PortfolioItem portfolio={portfolio as Portfolio} />
          </li>
        ))}
      </ul>
    </Layout.Default>
  );
}

export function PortfolioItem({ portfolio }: { portfolio: Portfolio }) {
  return (
    <Link
      className="flex relative rounded-lg overflow-hidden"
      href={`/portfolios/${portfolio.slug}`}
    >
      <Image
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={portfolio.coverImage ?? ""}
        width={600}
        height={360}
      />
      <div className="p-6 relative z-10 w-full bg-yellow-1 opacity-0 hover:opacity-100 rounded-lg">
        <h2 className="tracking-widest text-sm title-font font-medium text-yellow-10 mb-1">
          {format(parseISO(portfolio.publishedAt), "MMMM dd, yyyy")}
        </h2>
        <h1 className="title-font text-lg font-medium mb-3">
          {portfolio.title}
        </h1>
        <p className="leading-relaxed text-gray-11">{portfolio.description}</p>
      </div>
    </Link>
  );
}

const Icons = {
  RightArrow: () => (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  ),
};
