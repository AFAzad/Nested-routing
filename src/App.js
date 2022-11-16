// import logo from './logo.svg';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Business from "./components/Business";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact/" element={<Contact/>}>
          <Route path="company" element={<Company/>} />
          <Route path="business" element={<Business/>} />
          <Route path="other" element={<Other/>} />
        </Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
