import Image from "next/image";
import { load } from "outstatic/server";

import { Layout } from "@/components/layout";
import { BlogItem, Blog } from "./(content)/blogs/page";
import { PortfolioItem, Portfolio } from "./(content)/portfolios/page";

export default function Home() {
  return (
    <Layout.Default>
      <Sections.Hero />
      <Sections.Portfolio />
      <Sections.Blogs />
      <Sections.Logos />
      <Sections.Contact />
    </Layout.Default>
  );
}

const Sections = {
  Hero,
  Portfolio,
  Blogs,
  Logos,
  Contact,
};

function Hero() {
  return (
    <section className="body-font min-h-screen flex items-center">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
          <Image
            alt={"Chesterfield Sofa"}
            src="/images/chesterfield.jpg"
            fill
            className="object-cover object-center rounded-xl"
            priority
          />
        </div>
        <div className="text-center lg:w-2/3 w-full my-8">
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold">
            Furniture and kitchen
            <br /> Made to order
          </h1>
          <p className="my-8 leading-relaxed text-gray-11"></p>
        </div>
      </div>
    </section>
  );
}

const getLatestPortfolios = async () => {
  const db = await load();
  const portfolios = await db
    .find({ collection: "portfolios" }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "category",
    ])
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  return portfolios as unknown as Portfolio[];
};

async function Portfolio() {
  const portfolios = await getLatestPortfolios();
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h2 className="title-font sm:text-6xl text-4xl mb-4 font-bold">
            Quality work is our DNA
          </h2>
          <p className="lg:w-2/3 leading-relaxed text-base">
            We have been in the business for over 20 years and have worked with
            some of the biggest names in the industry. Our work speaks for
            itself.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.slug} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
}

const getLatestBlogs = async () => {
  const db = await load();
  const blogs = await db
    .find({ collection: "blogs" }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "category",
    ])
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  return blogs as unknown as Blog[];
};

async function Blogs() {
  const blogs = await getLatestBlogs();
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold">
            Get update to date
          </h1>
          {blogs.map((blog) => (
            <BlogItem key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="title-font sm:text-6xl text-4xl mb-4 font-bold">
          Our partners echo quality
        </h2>
        <div className="mt-12 inline-flex flex-wrap gap-y-4 gap-x-8">
          <LogoIcons.Warwick />
          <LogoIcons.DunlopFoam />
          <LogoIcons.ShannGroup />
        </div>
      </div>
    </div>
  );
}

const LogoIcons = {
  Warwick: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={50} viewBox="0 0 113 74">
      <g fill="none" fill-rule="evenodd" transform="translate(1)">
        <path
          className="fill-gray-12"
          d="M21.3492761,-8.54841348 L57.1825612,6.87684494 L18.7208955,37.0498876 L57.2503209,67.0721034 L21.3492761,82.5322831 L21.3492761,92.6065933 L92.2489522,62.2158742 L92.1851687,62.2050652 L58.7009418,37.0498876 L92.1937836,11.8902202 L91.8163836,11.8466517 L92.2489522,11.766 L21.3492761,-18.6247191 L21.3492761,-8.54841348 Z M33.2724985,37.0473933 L67.4205716,11.5153978 L73.3075478,14.1808944 L44.1576224,37.0498876 L73.2099672,59.844382 L67.3359134,62.5058876 L33.2724985,37.0473933 Z"
          transform="rotate(90 55.485 36.99)"
        ></path>
      </g>
    </svg>
  ),
  DunlopFoam: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={50} viewBox="0 0 265 311">
      <g className="fill-gray-12">
        <path d="M264.922 154.648L11.932 0l74.63 76.65-11.54.108C33.592 76.758 0 111.472 0 154.314c0 42.818 33.592 77.568 75.023 77.568l12.773.096-76.095 78.58 253.223-155.91zm-93.664-.334c0 41.924-32.866 75.9-73.41 75.9-40.566 0-73.42-33.976-73.42-75.9 0-41.912 32.854-75.888 73.42-75.888 40.544 0 73.41 33.976 73.41 75.888z" />
        <path d="M160.98 148.31c0-35.94-39.23-32.2-39.23-32.2l-63.3.05-8.6 21.902h15.056l-10.8 26.838H42.138L34 185.254h77.444c25.938 0 49.536-15.004 49.536-36.943zm-50.158-10.248c9.89 0 14.133 7.65 11.24 15.564-3.136 8.616-12.128 11.274-21.465 11.274h-8.923l10.802-26.838h8.346z" />
      </g>
    </svg>
  ),
  ShannGroup: () => (
    <svg height={50} viewBox="0 0 358 132" className="fill-gray-12">
      <path
        stroke="none"
        d=" M76.717041,109.596222   C74.441887,110.958275 72.173203,111.859741 69.207321,113.038239   C69.207321,100.449585 69.207321,89.175110 69.207321,77.900635   C68.884804,77.746246 68.562294,77.591858 68.239777,77.437462   C67.364960,78.825974 66.365997,80.152504 65.636589,81.613602   C62.302170,88.292877 59.083878,95.030144 55.747257,101.708298   C51.410641,110.387894 42.320465,115.337372 33.748425,113.776009   C23.887413,111.979874 16.007689,103.585007 14.963749,93.174171   C18.106798,96.098801 20.769541,98.849274 23.710745,101.260010   C31.249113,107.438759 36.812717,108.434723 42.704685,104.933655   C49.699142,100.777473 50.127544,92.908234 43.425835,88.367661   C39.865555,85.955490 35.908051,84.138115 32.261711,81.842773   C23.045607,76.041290 20.165068,66.445854 25.116804,58.475475   C29.820702,50.904011 39.932182,48.999321 48.911621,54.140839   C51.173569,55.436001 53.168301,57.197838 55.643944,59.006901   C53.909050,60.896656 52.496567,62.435219 51.193157,63.854969   C47.800018,62.155792 44.697205,60.375992 41.420372,59.015236   C36.768955,57.083652 33.125759,59.217495 30.869032,63.054176   C28.503338,67.076118 30.020536,70.839569 33.633968,73.490921   C36.427277,75.540520 39.614056,77.049286 42.441307,79.058273   C46.790726,82.148895 50.981926,85.462189 55.216705,88.663208   C59.074894,83.081917 63.607697,76.734695 67.859818,70.204712   C68.761154,68.820549 68.925682,66.771255 68.939484,65.024544   C69.030052,53.554138 68.986176,42.082672 68.986176,30.324585   C71.534409,30.324585 73.786903,30.324585 76.637024,30.324585   C76.637024,39.976810 76.637024,49.677986 76.637024,59.368179   C142.906204,15.755428 213.155655,-1.596650 290.427826,22.777742   C315.443695,30.668644 339.318878,43.570290 341.671783,49.066532   C260.879425,8.844983 180.028778,7.056439 98.027756,50.510246   C101.610771,51.384918 104.005486,51.740131 106.232574,52.554001   C114.605721,55.613892 119.359306,62.095409 119.780655,70.573944   C120.456177,84.166801 119.961685,97.817810 119.961685,111.714798   C117.781960,111.714798 115.684532,111.714798 112.834763,111.714798   C112.834763,107.921638 112.867546,104.006111 112.827881,100.091316   C112.746887,92.097183 112.781822,84.097702 112.485558,76.110931   C112.072609,64.978828 108.255081,59.916561 99.498558,58.306000   C91.831787,56.895870 81.704941,62.593533 79.067474,71.015007   C77.321846,76.588806 77.123566,82.729996 76.809998,88.647774   C76.449059,95.459457 76.724472,102.304863 76.717041,109.596222  z"
      />
      <path
        stroke="none"
        d=" M154.994049,52.779396   C168.070587,49.091705 178.804947,52.229019 187.932007,63.007919   C187.932007,59.250351 187.932007,56.348129 187.932007,53.225178   C190.573547,53.225178 192.831772,53.225178 195.362671,53.225178   C195.362671,72.730370 195.362671,92.143532 195.362671,111.772896   C192.889297,111.772896 190.641937,111.772896 188.153656,111.772896   C188.153656,108.944229 188.153656,106.320213 188.153656,102.429085   C179.846802,110.926170 170.571640,114.812233 159.629211,113.130371   C148.350067,111.396751 140.684555,104.632538 136.281342,94.393425   C129.199142,77.924698 137.610107,59.242455 154.994049,52.779396  M177.948807,102.669800   C187.691132,95.427017 190.996719,85.520088 187.042267,74.186287   C184.138992,65.865257 178.192642,60.484375 169.417465,59.163551   C160.050507,57.753654 151.899139,60.400650 146.296341,68.542267   C139.772781,78.021889 140.483505,89.908478 147.877960,98.396767   C155.221634,106.826782 165.736710,108.477112 177.948807,102.669800  z"
      />
      <path
        stroke="none"
        d=" M332.019287,87.006210   C332.019287,95.474632 332.019287,103.444252 332.019287,111.701523   C329.483032,111.701523 327.229858,111.701523 324.224609,111.701523   C324.224609,108.196442 324.242035,104.612396 324.221069,101.028572   C324.174286,93.035614 324.223785,85.039871 324.023254,77.050560   C323.721008,65.009949 319.218811,59.106239 309.918823,58.192577   C300.849854,57.301613 290.821503,64.949989 289.181885,74.791588   C288.179932,80.805923 288.266602,87.019630 288.100800,93.150192   C287.935242,99.270332 288.064484,105.398453 288.064484,111.752808   C285.383881,111.752808 283.125641,111.752808 280.568451,111.752808   C280.568451,92.274078 280.568451,72.878815 280.568451,53.232037   C282.972931,53.232037 285.227814,53.232037 287.889709,53.232037   C287.889709,55.999222 287.889709,58.736351 287.889709,62.445721   C290.598572,60.050526 292.531281,58.141731 294.663330,56.490292   C305.085571,48.417526 319.709625,49.238434 326.548492,59.311150   C329.705231,63.960598 330.576447,70.317940 331.829498,76.044121   C332.560730,79.385719 331.999207,83.010208 332.019287,87.006210  z"
      />
      <path
        stroke="none"
        d=" M242.042633,51.095024   C256.775818,53.292496 263.271515,59.838661 263.804443,73.898872   C264.276489,86.352898 263.903381,98.838959 263.903381,111.646545   C261.434601,111.646545 259.075592,111.646545 256.079071,111.646545   C256.079071,99.873619 256.134705,88.256989 256.063232,76.641151   C255.993576,65.322701 252.199585,59.982742 243.252319,58.310658   C235.656952,56.891216 225.293671,62.581192 222.732910,70.892349   C220.866302,76.950623 220.572037,83.580330 220.207367,89.991150   C219.802795,97.103409 220.114838,104.256432 220.114838,111.685898   C217.749146,111.685898 215.676300,111.685898 213.265259,111.685898   C213.265259,92.387505 213.265259,72.997627 213.265259,53.298073   C215.261993,53.298073 217.336319,53.298073 219.817596,53.298073   C219.817596,56.057758 219.817596,58.972057 219.817596,63.377823   C226.145447,55.898575 232.943588,51.639923 242.042633,51.095024  z"
      />
      <path
        stroke="none"
        d=" M343.480591,50.496017   C343.502045,50.501316 343.459137,50.490723 343.480591,50.496017  z"
      />
    </svg>
  ),
};

function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "187 Windsor Road, Northmead, NSW Australia",
      title: "Our office",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+614 0111 9989",
      title: "Phone",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "support@nguyencarpentry.com.au",
      title: "Email",
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="title-font sm:text-6xl text-4xl mb-4 font-bold">
            Let us know how we can help
          </h2>
          <p>
            We’re here to help and answer any question you might have, We look
            forward to hearing from you .
          </p>
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
              <li key={idx}>
                <h4 className="text-gray-11 text-lg font-medium">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-x-3">
                  <div className="flex-none text-gray-10">{item.icon}</div>
                  <p>{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
