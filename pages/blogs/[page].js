// pages/blogs/[page].tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { RxCalendar } from "react-icons/rx";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const POSTS_PER_PAGE = 10;

export default function Blog(props) {
  const { paginatedPosts, currentPage, totalPages } = props;

  return (
    <>
      <Navbar />
      <section className="w-full min-h-[85vh] py-10 bg-primary-green text-primary-white">
        <h1 className="pt-4 pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto text-center">
          Blog
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <div className="w-4/5 mx-auto p-0 sm:p-8 max-w-[1000px] min-h-[750px]">
          {paginatedPosts.map((blogPost, key) => (
            <article
              className="grid grid-cols-1 pt-6 pb-4 my-4 sm:grid-cols-3 bg-secondary-green-transparent"
              key={key}
            >
              <div className="flex justify-center col-span-1 px-2">
                <img src={blogPost.thumbNail} alt={blogPost.title} />
              </div>
              <div className="col-span-1 px-2 sm:col-span-2">
                <h1 className="mb-4 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
                  {blogPost.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  {blogPost.description.length <= 200
                    ? blogPost.description
                    : blogPost.description.slice(0, 200) + "..."}
                </p>
                <div className="text-sm text-blue-300 sm:text-base md:text-lg lg:text-xl">
                  <Link href={`/blogs/post/${blogPost.slug}`}>
                    Continue reading
                  </Link>
                </div>
                <div className="h-6">
                  <span className="flex-container flex-nowrap">
                    <RxCalendar className="inline" />
                    <time dateTime={new Date(blogPost.date).toISOString()}>
                      {new Date(blogPost.date).toLocaleDateString()}
                    </time>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4 w-[1000px] mx-auto">
          {currentPage > 1 ? (
            <Link
              href={`/blogs/${currentPage - 1}`}
              className="w-24 px-4 py-2 text-white transition duration-200 rounded bg-secondary-green hover:bg-secondary-green"
            >
              Previous
            </Link>
          ) : (
            <span className="w-24 px-4 py-2 text-gray-500 bg-transparent rounded cursor-not-allowed">
              Previous
            </span>
          )}

          <span className="flex-grow text-lg text-center">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={`/blogs/${currentPage + 1}`}
              className="w-24 px-4 py-2 text-white transition duration-200 rounded bg-secondary-green hover:bg-secondary-green"
            >
              Next
            </Link>
          ) : (
            <span className="w-24 px-4 py-2 text-gray-500 bg-transparent rounded cursor-not-allowed">
              Next
            </span>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

// getStaticPaths for dynamic routing and pagination
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "blogs"));
  const blogs = files.filter((fn) => fn.endsWith(".md"));

  // Parse the blog data using gray-matter
  const allPosts = blogs.map((blog) => {
    const filePath = path.join(process.cwd(), "blogs", blog);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, index) => ({
    params: { page: (index + 1).toString() }, // Create paths like /blogs/1, /blogs/2, etc.
  }));

  return {
    paths,
    fallback: false, // If you want to generate pages dynamically, set to true
  };
};

// getStaticProps to return the paginated posts
export const getStaticProps = async ({ params }) => {
  const page = parseInt(params.page, 10);

  const files = fs.readdirSync(path.join(process.cwd(), "blogs"));
  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const allPosts = blogs.map((blog) => {
    const filePath = path.join(process.cwd(), "blogs", blog);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { ...data, slug: blog.replace(".md", "") }; // Add slug for routing
  });

  // Get the posts for the current page
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return {
    props: {
      paginatedPosts,
      currentPage: page,
      totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    },
  };
};
