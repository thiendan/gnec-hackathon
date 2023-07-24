import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));