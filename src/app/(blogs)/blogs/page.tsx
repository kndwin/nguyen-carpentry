import { getDocuments, load } from "outstatic/server";
import { Layout } from "@/components/layout";

async function getData() {
  const db = await load();
  const blogs = await db.find({ collection: "blogs" }).toArray();
  const documents = await getDocuments("blogs", [
    "title",
    "slug",
    "description",
  ]);

  console.log({ documents });

  return blogs;
}

export default async function Blogs() {
  const blogs = await getData();

  console.log({ blogs });

  return (
    <Layout.Default>
      <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </Layout.Default>
  );
}
