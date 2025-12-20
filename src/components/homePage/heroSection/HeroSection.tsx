import React from "react";
import { HeroSlider } from "./HeroSlider"; // Importing the HeroSlider component
import { getPostsHero } from "@/utils/sanityQueries"; // Importing the function to fetch posts
import { HeroPostDetail } from "./HeroPostDetail"; // Importing the HeroPostDetail component

// Asynchronous component HeroSection to fetch and display hero posts
export const HeroSection = async () => {
  // Fetching posts using getPostsHero function
  const posts = await getPostsHero();

  return (
    // Main container with styling for layout and background
    <div className="flex flex-col gap-4 bg-gray-100 p-2 sm:p-8 lg:flex-row">
      {/* Display the first post with special styling as the main hero post */}
      <HeroPostDetail post={posts[0]} firstPost={true} />

      {/* Container for additional posts, visible only on medium and larger screens */}
      <div className="hidden basis-full flex-col gap-4 sm:flex lg:basis-1/2">
        {/* Row container for the second and third posts */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <HeroPostDetail post={posts[1]} />
          <HeroPostDetail post={posts[2]} />
        </div>
        {/* Row container for the fourth and fifth posts */}
        <div className="flex flex-col gap-4 rounded-md sm:flex-row">
          <HeroPostDetail post={posts[3]} />
          <HeroPostDetail post={posts[4]} />
        </div>
      </div>
      {/* Container for the HeroSlider, visible only on small screens */}
      <div className="basis-full sm:hidden">
        <HeroSlider posts={posts} />
      </div>
    </div>
  );
};
