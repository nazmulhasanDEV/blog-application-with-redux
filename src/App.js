import Navbar from "./components/nav-bar";
import Posts from "./components/posts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
