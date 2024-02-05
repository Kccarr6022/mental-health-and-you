import { BlogPost } from "@/types/BlogPost";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // UPDATE BACKEND TO QUERY SQL DATABASE
  const initialPosts: BlogPost[] = [
    {
      id: 1,
      title: "Welcome to Mental Health and You",
      thumbNail: `https://picsum.photos/750/750`,
      body: "This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans. This is our first blog post to Mental Health and You. Thank you for joining the site, we have great plans.",
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

  // Convert the id to a number and find the corresponding post
  const { id } = context.params as Params;
  const post = initialPosts.find((p) => p.id === parseInt(id, 10));

  // Make sure to handle the case where a post isn't found
  if (!post) {
    return { notFound: true };
  }

  const serializedPost = {
    ...post,
    date: post.date.toISOString(),
  };

  return { props: { serializedPost } };
};

interface BlogPostProps {
  serializedPost: BlogPost;
}

const BlogPost: React.FC<BlogPostProps> = ({ serializedPost: post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section className="w-full min-h-[85vh] py-10 bg-primary-green text-primary-white">
        <h1 className="pt-4 pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto text-center">
          {post.title}
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <article className="w-4/5 mx-auto p-0 sm:p-8 max-w-[1000px]">
          <img src={post.thumbNail} alt={post.title} className="w-full my-4" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-4">
            {post.body}
          </p>
          {/* <p>{post.date}</p> */}
          <p className="my-4 text-base sm:text-lg md:text-xl lg:text-2xl">
            {post.author}
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
