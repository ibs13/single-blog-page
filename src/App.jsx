import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Blogs />
        <Bookmark />
      </div>
    </>
  );
}

export default App;
