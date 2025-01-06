import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div>Blog</div>;
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
