import Link from "next/link";
import { ButtonToggleTheme } from "./button-toggle-theme";

const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-1 text-gray-12">
      <main>{children}</main>
    </div>
  );
};

const Default = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex-grow">{children}</main>
        <Footer />
      </div>
    </Layout>
  );
};

const Blog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5 flex flex-col">
        <Header />
        <article className="mb-32">{children}</article>
      </div>
    </Layout>
  );
};

const Logo = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-10 h-10 text-gray-12 p-2 rounded-full"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const Header = () => {
  return (
    <header className="text-gray-12 body-font">
      <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl">Nguyen Carpentry</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
          <Link href="/blogs">Blogs</Link>
          <ButtonToggleTheme />
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="text-gray-11 body-font">
      <div className="py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo />
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Nguyen Carpentry
        </p>
        <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a>
            <Icon.Facebook />
          </a>
          <a>
            <Icon.Twitter />
          </a>
          <a>
            <Icon.Instagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

const Icon = {
  Facebook: () => (
    <svg
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  ),
  Twitter: () => (
    <svg
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  ),
  Instagram: () => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  ),
};

export const Layout = Object.assign(LayoutBase, {
  Blog,
  Default,
  Footer,
  Header,
});
