import Navbar from "./components/nav-bar";
import Posts from "./components/posts";
import AddPost from "./components/addPost/AddPost";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
