// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './css/MainCss.css';
const Navbar = () => {
  return <>
    <div className="navbar">
      <div className="Logo">
        <Link to="/">fuckers</Link>
      </div>
      <ul className="nav">

        <li className="nav-item"><Link className="nav-link" to='/contact'>Around Me</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/about'>Order Now</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/more'>Login/Sign Up</Link></li>
      </ul>

    </div>

{/* home baby */}
   
{/* home ends baby */}

  </>;
}
export default Navbar
