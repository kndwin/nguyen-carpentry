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
      <ul>
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
    <Link href={`/portfolios/${portfolio.slug}`}>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <Image
            width={200}
            height={200}
            src={portfolio.coverImage ?? ""}
            alt={portfolio.title}
            className="object-cover object-center rounded"
          />
        </div>
        <div className="md:flex-grow">
          <span className="mt-1 text-gray-10 text-sm mr-4">
            {format(parseISO(portfolio.publishedAt), "MMMM dd, yyyy")}
          </span>
          <div className="inline-flex flex-wrap gap-2">
            {portfolio.category.map(({ value }) => (
              <span
                key={value}
                className="capitalize bg-yellow-5 rounded w-fit text-xs px-1 font-medium text-yellow-12"
              >
                {value}
              </span>
            ))}
          </div>
          <h2 className="text-2xl text-gray-12 font-bold title-font mb-2">
            {portfolio.title}
          </h2>
          <p className="leading-relaxed">{portfolio.description}</p>
          <a className="text-yellow-10 inline-flex items-center mt-4 line-clamp-2 overflow-ellipsis">
            Learn More
            <Icons.RightArrow />
          </a>
        </div>
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