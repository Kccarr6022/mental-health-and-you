export default function Post({ children, frontMatter }) {
  console.log("children", children);
  console.log("frontMatter", frontMatter);
  return <div>This is my post</div>;
}
