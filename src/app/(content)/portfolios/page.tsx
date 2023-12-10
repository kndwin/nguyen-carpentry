import { getDocuments } from "outstatic/server";

import { Layout } from "@/components/layout";
import { PortfolioListItem, Portfolio } from "./list-item";

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
            <PortfolioListItem portfolio={portfolio as Portfolio} />
          </li>
        ))}
      </ul>
    </Layout.Default>
  );
}
