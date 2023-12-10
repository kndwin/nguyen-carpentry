import Image from "next/image";
import { OstDocument } from "outstatic";
import { parseISO, format } from "date-fns";
import Link from "next/link";

export type Portfolio = {
  category: { value: string; label: string }[];
} & OstDocument;

export function PortfolioListItem({ portfolio }: { portfolio: Portfolio }) {
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
