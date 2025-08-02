function BlogDetails(props) {
  const blogs = props.blogs;

  return (
    <>
      <h1 className= "heading" > Blog Details</h1>
      <div className="blog-details">
        {blogs.map((blog, index) => {
          return (
            <div key={index} className="blog">
              <h2>{blog.title}</h2>
              <h3>{blog.author}</h3>
              <p>{blog.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogDetails;
