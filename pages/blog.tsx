import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { RxCalendar } from "react-icons/rx";
import { BlogPost } from "@/types/BlogPost";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const initialPosts: BlogPost[] = [
  {
    slug: "1",
    title: "Welcome to Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    description:
      "This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans.",
    date: new Date(),
    author: "Kaden Carr",
  },
  {
    slug: "2",
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    description:
      "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
  {
    slug: "3",
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    description:
      "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
  {
    slug: "14",
    title: "Plans for Mental Health and You",
    thumbNail: `https://picsum.photos/750/750`,
    description:
      "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
    date: new Date(),
    author: "Mateo Cagliano",
  },
];

export default function Blog(props) {
  const realData = props.data.map((blog) => matter(blog));
  const blogPosts = realData.map((blogPost) => blogPost.data);

  console.log(blogPosts);

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
                  className="grid grid-cols-1 pt-6 pb-4 my-4 sm:grid-cols-3 bg-secondary-green-transparent"
                  key={key}
                >
                  <div className="flex justify-center col-span-1 px-2">
                    <img src={blogPost.img} />
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
                      <Link href={`/blogs/${blogPost.slug}`}>
                        continue reading
                      </Link>
                    </div>
                    <div className="h-6">
                      <span className="flex-container flex-nowrap">
                        <RxCalendar className="inline" />
                        {/* <time dateTime={blogPost.date.toISOString()}>
                          May 05, 2023
                        </time> */}
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
}

// https://www.youtube.com/watch?v=McLta2eHej0
export const getStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/blogs`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/blogs/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  const returnedData = {
    props: {
      data,
    },
  };

  return returnedData;
};
