import { getDocuments } from "outstatic/server";

import { Layout } from "@/components/layout";
import { BlogListItem, Blog } from "./list-item";

const blogs = getDocuments("blogs", [
  "title",
  "slug",
  "status",
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
            <BlogListItem blog={blog as Blog} />
          </li>
        ))}
      </ul>
    </Layout.Default>
  );
}
