import Link from "next/link";
import { parseISO, format } from "date-fns";
import { OstDocument } from "outstatic";
import Image from "next/image";

export type Blog = {
  category: { value: string; label: string }[];
} & OstDocument;

export function BlogListItem({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="py-8 flex flex-wrap sm:flex-nowrap">
        <div className="relative h-40 w-full sm:w-40 mb-4 sm:mr-4 flex-shrink-0 flex flex-col">
          <Image
            src={blog.coverImage ?? ""}
            alt={blog.title}
            className="object-cover object-center rounded-xl"
            fill
            priority
          />
        </div>
        <div className="md:flex-grow">
          <span className="mt-1 text-sand-11 text-sm mr-4">
            {format(parseISO(blog.publishedAt), "MMMM dd, yyyy")}
          </span>
          <div className="inline-flex flex-wrap gap-2">
            {blog.category.map(({ value }) => (
              <span
                key={value}
                className="capitalize bg-yellow-5 rounded w-fit text-xs px-1 font-medium text-yellow-12"
              >
                {value}
              </span>
            ))}
          </div>
          <h2 className="text-2xl text-yellow-12 font-bold title-font mb-2">
            {blog.title}
          </h2>
          <p className="leading-relaxed">{blog.description}</p>
          <a className="text-sand-10 inline-flex items-center mt-4 line-clamp-2 overflow-ellipsis">
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
