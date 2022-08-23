import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/nav/Nav';
import Home from './component/home/Home';
import About from './component/about/About';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
