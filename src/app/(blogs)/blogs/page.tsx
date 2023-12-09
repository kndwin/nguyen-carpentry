import Image from "next/image";
import { getDocuments } from "outstatic/server";
import { Layout } from "@/components/layout";
import { parseISO, format } from "date-fns";
import Link from "next/link";

const blogs = getDocuments("blogs", [
  "title",
  "slug",
  "description",
  "category",
  "coverImage",
]);

export default async function Blogs() {
  return (
    <Layout.Default>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>
              <BlogItem blog={blog as Blog} />
            </Link>
          </li>
        ))}
      </ul>
    </Layout.Default>
  );
}

type Blog = (typeof blogs)[number] & {
  category: { label: string; value: string }[];
};

export function BlogItem({ blog }: { blog: Blog }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <Image
          width={200}
          height={200}
          src={blog.coverImage ?? ""}
          alt={blog.title}
          className="object-cover object-center rounded"
        />
      </div>
      <div className="md:flex-grow">
        <span className="mt-1 text-gray-10 text-sm mr-4">
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
        <h2 className="text-2xl text-gray-12 font-bold title-font mb-2">
          {blog.title}
        </h2>
        <p className="leading-relaxed">{blog.description}</p>
        <a className="text-yellow-10 inline-flex items-center mt-4 line-clamp-2 overflow-ellipsis">
          Learn More
          <Icons.RightArrow />
        </a>
      </div>
    </div>
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
