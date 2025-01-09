import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4 mt-4 bg-gray-300">
      <div>
        <h2 className="text-2xl text-center m-4 p-2 text-purple-950 border-2 border-purple-600 bg-purple-300 rounded-lg">
          Total Reading Time: {readingTime}
        </h2>
      </div>
      <h2 className="text-3xl my-4 text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
