const BlogError = () => (
  <div className="p-36 m-auto text-center text-2xl">
    <p>Failed to fetch blog post, please try again later.</p>

    <a
      href={"https://medium.com/@pseudoeazy"}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read on Medium
    </a>
  </div>
);

export default BlogError;
