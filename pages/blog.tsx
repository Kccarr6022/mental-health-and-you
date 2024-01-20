import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import { UUID } from "crypto"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

interface BlogPost {
    id: number,
    title: string,
    thumbNail: string,
    body: string,
    date: Date,
    author: string,
}


const initialPosts: BlogPost[] = [
    {
        id: 1,
        title: "Welcome to Mental Health and You",
        thumbNail: `https://picsum.photos/750/750`,
        body: "This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans.",
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
        id: 4,
        title: "Plans for Mental Health and You",
        thumbNail: `https://picsum.photos/750/750`,
        body: "The plans for Mental Health and You include x, y, and z. Thank you for being apart of the site and we have future ideas",
        date: new Date(),
        author: "Mateo Cagliano",
    }
];

const Blog = () => {
    const [blogPosts, setBlogPosts ] = useState<BlogPost[]>(initialPosts)

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
        <div className="w-4/5 max-w-[800px] mx-auto">
            {initialPosts.map((blogPost, key) => {
                return <>
                <article className="grid gird-cols-1 sm:grid-cols-3 p-2 my-4 bg-secondary-green-transparent" key={key}>
                <div className="flex justify-center col-span-1">
                    <img src={blogPost.thumbNail} />
                </div>
                <div className="px-2 col-span-2 grid grid-cols-1 sm:grid-cols-2">
                    <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl cols-span-1 sm:col-span-2">{blogPost.title}</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl cols-span-1 sm:col-span-2">{blogPost.body}</p>
                    <small>{blogPost.date.getMonth().toString()} {blogPost.date.getDate().toString()}, {blogPost.date.getFullYear().toString()}</small>
                    <small><a href={`/blogs/${blogPost.id}`}>read more...</a></small>
                </div>
                </article>
                <hr />
                </>
            })}
        </div>
        <h3 className="text-center">Page 1 of 1</h3>
        </section>
        <Footer />
        </>
    )
}

export default Blog