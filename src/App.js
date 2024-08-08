import Home from "./components/Home";
import Contact from "./components/Contact"
import More from "./components/More"
import About from "./components/About"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
const App=()=>{
    return(<>
  <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/more' element={<More/>}/>
    </Routes>

    <Footer/>
  </Router>
    </>);
}
export default App;