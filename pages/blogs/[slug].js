import matter from "gray-matter";
import Markdown from "react-markdown";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import style from "./markdown.module.css";

function BlogPost(props) {
  const { data, content } = matter(props.content);

  console.log(content);
  return (
    <>
      <Navbar />
      <section className="bg-primary-green min-h-[100vh] h-fit py-8 text-primary-white">
        <div className="max-w-[1000px] mx-auto">
          <h1 className=" pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-[75%] mx-auto">
            {data.title}
          </h1>
          <div className="relative mb-8">
            <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[7%] rounded-full"></div>
            <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
            <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[7%] rounded-full"></div>
          </div>
          <main className="w-4/5 mx-auto m-2 p-2 text-left bg-primary-white text-primary-green">
            <Markdown className={style.markdown}>{content}</Markdown>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const fs = require("fs");

  const content = fs.readFileSync(
    `${process.cwd()}/blogs/${params.slug}.md`,
    "utf8"
  );

  return {
    props: {
      content,
    },
  };
};

export default BlogPost;
