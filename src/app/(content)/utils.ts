import { remark } from "remark";
import html from "remark-html";

export function absoluteUrl(path: string) {
  return `${
    process.env?.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${path}`;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
