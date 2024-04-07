import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { BlogPost } from "@/types/BlogPost";
import Link from "next/link";

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    body: "This is our first blog post to Mental Health and Yssou. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans.",
    date: new Date(),
    author: "Kaden Carr",
  },
  {
    id: 2,
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    body: "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
  {
    id: 3,
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    body: "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
  {
    id: 14,
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    body: "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts);

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
        <div className="w-4/5 mx-auto p-0 sm:p-8 max-w-[1000px]">
          {blogPosts.map((blogPost, key) => {
            return (
              <>
                <article
                  className="grid grid-cols-1 sm:grid-cols-3 pt-6 pb-4 my-4 bg-secondary-green-transparent"
                  key={key}
                >
                  <div className="flex justify-center col-span-1 px-2">
                    <img src={blogPost.thumbNail} />
                  </div>
                  <div className="px-2 col-span-1 sm:col-span-2">
                    <a href={`/blog/${blogPost.id}`}>
                      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
                        {blogPost.title}
                      </h1>
                    </a>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      {blogPost.body.length <= 200
                        ? blogPost.body
                        : blogPost.body.slice(0, 200) + "..."}
                    </p>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-300">
                      <Link href={`/blog/${blogPost.id}`}>
                        continue reading
                      </Link>
                    </div>
                    <div className="h-6">
                      <span className="flex-container flex-nowrap">
                        <RxCalendar className="inline" />
                        <time dateTime={blogPost.date.toISOString()}>
                          May 05, 2023
                        </time>
                      </span>
                    </div>
                  </div>
                </article>
                <hr />
              </>
            );
          })}
        </div>
        <h3 className="text-center">Page 1 of 1</h3>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
