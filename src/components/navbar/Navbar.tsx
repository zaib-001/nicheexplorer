// Import necessary modules and components
"use client"; // Declare the file as client-side code
import Link from "next/link"; // Import the Link component from Next.js for client-side navigation
import Image from "next/image"; // Import the Image component from Next.js for optimized image loading
import { DropDown } from "./DropDown"; // Import the custom DropDown component
import logo from "@/../public/logo.png"; // Import the logo image
import React, { useState } from "react"; // Import React and useState hook

// Interface defining the structure of the NavbarProps
interface NavbarProps {
  categories: {
    title: string;
    slug: string;
  }[];
}

// Navbar component definition using React Functional Component with NavbarProps
export const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  // State to handle mobile menu open/close status
  const [openMbl, setopenMbl] = useState(false);

  // CSS classes for showing/hiding mobile menu
  const showClass =
    "justify-content-center top-68 animate-open-menu absolute flex w-full origin-top flex-col  bg-white text-2xl";
  const hideClass =
    "justify-content-center top-68 animate-close-menu absolute hidden w-full origin-bottom flex-col  bg-white text-2xl";

  // Split categories into main and extra categories
  const mainCategories = categories.slice(0, 5);
  const extraCategories = categories.slice(2);
  extraCategories.push({ title: "Explore", slug: "categories" });
  const mainMblCategories = categories.slice(0, 5);

  return (
    // Header section containing the navbar
    <header className="sticky top-0 z-50 bg-[#ffffff] text-gray-500 opacity-[0.98] shadow-md">
      {/* Container for navbar content */}
      <section className="mx-auto flex max-w-[1440px] items-center justify-between p-4">
        {/* Brand/logo with a link to the homepage */}
        <h1 className="text-xl font-medium sm:text-2xl md:text-3xl">
          <Link href="/">
            {/* Logo image */}
            <Image src={logo} alt="nicheexplorer" className="h-[72px] w-[104px]" />
          </Link>
        </h1>
        <div>
          {/* Hamburger button for mobile menu toggle */}
          <button
            id="hamburger-button"
            className="cursor-pointer sm:hidden "
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            {/* Hamburger icon */}
            {openMbl ? (
              <span className=" text-2xl sm:text-2xl">&times;</span>
            ) : (
              <span className="text-2xl sm:text-2xl">&#9776;</span>
            )}
          </button>
          {/* Main navigation links */}
          <nav
            className="hidden items-center space-x-4 text-lg sm:inline-flex lg:text-xl"
            aria-label="main"
          >
            {/* Link to latest news */}
            <Link href={"/latest-news"} className="hover:text-gray-800">
              Latest News
            </Link>
            {/* Main categories */}
            {mainCategories.map((item, index) => (
              <Link
                key={index}
                href={`/categories/${item.slug}`}
                className="hover:text-gray-800"
              >
                {item.title}
              </Link>
            ))}
            {/* Dropdown for extra categories */}
            {extraCategories.length > 0 && (
              <DropDown categories={extraCategories} />
            )}
          </nav>
        </div>
      </section>
      {/* Mobile menu */}
      <section id="mobile-menu" className={openMbl ? showClass : hideClass}>
        {/* Mobile navigation links */}
        <nav
          className="flex min-h-screen flex-col items-center space-y-6 py-8"
          aria-label="mobile"
          onClick={() => {
            setopenMbl(!openMbl);
          }}
        >
          {/* Link to latest news */}
          <Link
            href={"/latest-news"}
            className="w-full text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Latest News
          </Link>
          {/* Main mobile categories */}
          {mainMblCategories.map((item, index) => (
            <Link
              key={index}
              href={`/categories/${item.slug}`}
              onClick={() => {
                setopenMbl(!openMbl);
              }}
              className="w-full text-center hover:text-gray-800 hover:opacity-90"
            >
              {item.title}
            </Link>
          ))}
          {/* Link to explore categories */}
          <Link
            href="/categories"
            className="w-full text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Explore Categories
          </Link>
        </nav>
      </section>
    </header>
  );
};
