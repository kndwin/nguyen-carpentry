import { Header } from "./header";
import { Logo } from "./logo";

const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-sand-1 text-sand-12">
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

const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5 flex flex-col">
        <Header />
        <article className="mb-32">{children}</article>
      </div>
    </Layout>
  );
};

const Footer = () => {
  return (
    <footer className="body-font">
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
  Article,
  Default,
});
