import Image from "next/image";
import { load } from "outstatic/server";

import { Layout } from "@/components/layout";
import { BlogItem } from "./(content)/blogs/page";

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

function Portfolio() {
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
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
                width={600}
                height={360}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Holden Caulfield
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
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
  return blogs;
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
        <div className="mt-12 flex">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <LogoIcons.Warwick />
            </li>
            <li>
              <LogoIcons.DunlopFoam />
            </li>
          </ul>
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
      contact: "Mountain View, California, United State.",
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
      contact: "+1 (555) 000-000",
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
      contact: "Support@example.com",
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
                <h4 className="text-gray-800 text-lg font-medium">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-x-3">
                  <div className="flex-none text-gray-400">{item.icon}</div>
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
