import React from "react"; // Importing the React library
import { urlForImage } from "../../../../sanity/lib/image"; // Importing the urlForImage function from the image module in the Sanity library
import Link from "next/link"; // Importing the Link component from Next.js
import Image from "next/image"; // Importing the Image component from Next.js
import defaultImage from "@/../public/defaultImage.jpg"; // Importing a default image // Importing the default image

// Define the structure of the props for the TopSectionPost component
interface LatestSectionPostProps {
  post: any; // The post object
}

// Define and export the TopSectionPost component using React Functional Component (React.FC) with props of type TopSectionPostProps
export const LatestSectionPost: React.FC<LatestSectionPostProps> = ({ post }) => {
  return (
    <div className="mx-auto max-w-[24rem]  gap-4 rounded-xl sm:max-w-xl md:max-w-3xl md:flex-row">
      {/* Left/Top Image */}
      
      {/* Right/Bottom Description Section */}
      <div className="flex basis-3/5 flex-col justify-between">
        <div>
          <div className="flex items-start text-xs">
            {/* Link to the category */}
            <Link
              href={`/categories/${post.categories[0].slug}`}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.categories ? post.categories[0].title : "Press Release"}
            </Link>
          </div>
          {/* Description Heading*/}
          <Link
            className="mt-3 text-lg font-semibold leading-6 text-gray-700 hover:text-gray-900"
            href={`/${post.slug}`}
          >
            {post.title}
          </Link>
          {/* Description Detail */}
         
        </div>
        {/* Author detail */}
        
      </div>
    </div>
  );
};
