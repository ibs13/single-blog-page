import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkasRead }) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
    description,
  } = blog;

  return (
    <div className="mb-16">
      <img
        className="w-full mb-8"
        src={cover_img}
        alt={`Cover Image of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img
            className="w-14 mr-3"
            src={author_img}
            alt={`Profile picture of ${author}`}
          />
          <div>
            <h3 className="font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-700"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p className="mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="text-blue-600 mx-0.5" href="">
              {hash}{" "}
            </a>
          </span>
        ))}
      </p>
      <p className="text-justify">{description}</p>
      <button
        onClick={() => handleMarkasRead(reading_time, id)}
        className="text-purple-800 underline mt-3"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkasRead: PropTypes.func,
};

export default Blog;
