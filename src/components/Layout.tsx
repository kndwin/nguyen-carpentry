import Link from "next/link";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export const Header = () => {
  return (
    <nav className="layout flex items-center justify-between py-4">
      <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#posts" className="hover:underline">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:underline">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
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
