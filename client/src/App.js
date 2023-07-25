import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Connect from "./components/Connect/Connect";
import CreatePost from "./components/CreatePost/CreatePost";
import Register from "./components/Register/Register";
import Post from "./components/SinglePost/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/CreatPost" element={<CreatePost />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));