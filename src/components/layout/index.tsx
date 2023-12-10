import { Header } from "./header";

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

export const Logo = () => (
  <svg
    width="45"
    height="25"
    viewBox="0 0 45 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4886 0.727272V24H15.2386L5.11364 9.35227H4.94318V24H0.0227273V0.727272H4.34091L14.3864 15.3636H14.5909V0.727272H19.4886ZM44.0881 8.875H39.1108C39.0199 8.23106 38.8343 7.65909 38.554 7.15909C38.2737 6.65151 37.9138 6.2197 37.4744 5.86364C37.035 5.50757 36.5275 5.23485 35.9517 5.04545C35.3835 4.85606 34.7661 4.76136 34.0994 4.76136C32.8949 4.76136 31.8456 5.06061 30.9517 5.65909C30.0578 6.25 29.3646 7.11364 28.8722 8.25C28.3797 9.37879 28.1335 10.75 28.1335 12.3636C28.1335 14.0227 28.3797 15.4167 28.8722 16.5455C29.3722 17.6742 30.0691 18.5265 30.9631 19.1023C31.857 19.678 32.8911 19.9659 34.0653 19.9659C34.7244 19.9659 35.3343 19.8788 35.8949 19.7045C36.4631 19.5303 36.9669 19.2765 37.4062 18.9432C37.8456 18.6023 38.2093 18.1894 38.4972 17.7045C38.7926 17.2197 38.9972 16.6667 39.1108 16.0455L44.0881 16.0682C43.9593 17.1364 43.6373 18.1667 43.1222 19.1591C42.6146 20.1439 41.929 21.0265 41.0653 21.8068C40.2093 22.5795 39.1866 23.1932 37.9972 23.6477C36.8153 24.0947 35.4782 24.3182 33.9858 24.3182C31.91 24.3182 30.054 23.8485 28.4176 22.9091C26.7888 21.9697 25.5009 20.6098 24.554 18.8295C23.6146 17.0492 23.1449 14.8939 23.1449 12.3636C23.1449 9.82576 23.6222 7.66667 24.5767 5.88636C25.5313 4.10606 26.8267 2.75 28.4631 1.81818C30.0994 0.878787 31.9403 0.40909 33.9858 0.40909C35.3343 0.40909 36.5843 0.598484 37.7358 0.977272C38.8949 1.35606 39.9214 1.90909 40.8153 2.63636C41.7093 3.35606 42.4366 4.23864 42.9972 5.28409C43.5653 6.32954 43.929 7.52651 44.0881 8.875Z"
      className="fill-yellow-12"
    />
  </svg>
);

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
});
