import React from "react";

// Define and export the CategoriesPageHeader component
export const CategoriesPageHeader = () => {
  return (
    // Container for the header content with maximum width and centered alignment
    <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      {/* Header title */}
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
        Discover a World of Knowledge: Explore Our Diverse Categories
      </h2>
      {/* Header description */}
      <p className="font-light text-gray-500 sm:text-xl">
        {/* Introduction to the website */}
        Welcome to{" "}
        <strong className="font-semibold text-gray-700">nicheexplorer</strong>, where
        curiosity meets content. Dive into a plethora of topics and ideas
        meticulously organized into vibrant categories.{" "}
        {/* Description of the content */}
        From the latest trends to timeless classics, our collection of blog
        posts promises to engage, inspire, and inform. Uncover a wealth of
        insights, entertainment, and expertise as you navigate through our
        thoughtfully curated categories. Explore, learn, and enjoy the journey
        through the diverse realms of{" "}
        <strong className="font-semibold text-gray-700">nicheexplorer</strong>. Your
        next discovery awaits!
      </p>
    </div>
  );
};
