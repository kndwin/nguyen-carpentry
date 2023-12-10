"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { tv } from "tailwind-variants";

import { ButtonToggleTheme } from "./button-toggle-theme";
import { Logo } from "./logo";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="text-gray-12 body-font">
      <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Logo.LongText />
        </Link>
        <nav className="md:ml-auto text-lg flex flex-wrap items-center justify-center gap-4">
          <Link
            className={linkVariant({ active: pathname === "/blogs" })}
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className={linkVariant({ active: pathname === "/portfolios" })}
            href="/portfolios"
          >
            Portfolio
          </Link>
          <ButtonToggleTheme />
        </nav>
      </div>
    </header>
  );
};

const linkVariant = tv({
  base: "",
  variants: {
    active: {
      true: "font-semibold",
    },
  },
  defaultVariants: {
    active: false,
  },
});
