// Importing the getPostsTop function from the sanityQueries module in the utils directory
import { getPostsTop } from "@/utils/sanityQueries";
// Importing the TopSectionHeadline component from the TopSectionHeadline module in the same directory
import { LatestSectionHeadline } from "./LatestSectionHeadline";
// Importing the TopSectionPostPlaceHolder component from the TopSectionPostPlaceHolder module in the same directory
import { LatestSectionPostPlaceHolder } from "./LatestSectionPostPlaceHolder";
// Importing the TopSectionPost component from the TopSectionPost module in the same directory
import { LatestSectionPost } from "./LatestSectionPost";

// Default function for the TopNews component
export default async function LatestNews() {
  // Fetching top posts using the getPostsTop function
  const posts = await getPostsTop();

  return (
    // Main container div for the top news section with white background
    <div className="bg-white">
      {/* Container div with maximum width and padding */}
      <div className="p-4">
        {/* Rendering the TopSectionHeadline component */}
        <LatestSectionHeadline />
        {/* Conditional rendering based on whether there are posts available */}
        {posts.length > 0 ? (
          // If there are posts available, render them in a grid layout
          <div className="mx-auto mt-2 flex max-w-2xl gap-4 pt-2 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Mapping over each post and rendering the TopSectionPost component for each */}
            {posts.map((post: any, index: any) => (
              <LatestSectionPost key={index} post={post} />

            ))};
            
           
            </div>
            
            

            ) : (
            // If there are no posts available, render the TopSectionPostPlaceHolder component
            <LatestSectionPostPlaceHolder />
        )}
          </div>
    </div>
  );
}
