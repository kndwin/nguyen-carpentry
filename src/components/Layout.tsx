import Link from "next/link";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

const Blog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <Header />
        <article className="mb-32">{children}</article>
      </div>
    </Layout>
  );
};

export const Layout = Object.assign(LayoutDefault, { Blog });

const navigation = [{ title: "Blogs", path: "/blogs" }];

export const Header = () => {
  return (
    <header className="text-gray-1 body-font">
      <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Nguyen Carpentry</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/blogs">Blogs</Link>
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-5 p-10">
        <h3 className="font-semibold text-2xl mb-10 lg:mb-0 lg:pr-4">
          Sample website built with{" "}
          <a className="underline" href="https://outstatic.com/">
            Outstatic
          </a>{" "}
          and{" "}
          <a className="underline" href="https://nextjs.org/">
            Next.js
          </a>
        </h3>
      </div>
    </footer>
  );
};
