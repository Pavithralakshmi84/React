
import { Link } from 'react-router-dom';
 // Import corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Maniratham Movies</div>
      <div className="navbar-links">
        <Link to="/banner" className="nav-link">Banner</Link>
        <Link to="/cards" className="nav-link">Cards</Link>
        <Link to="/state" className="nav-link">State</Link>
        <Link to="/state1" className="nav-link">State Processing</Link>
        <Link to ="/fibo" className="nav-link">Fibanocci Series</Link>
         <Link to ="/quote" className="nav-link">Quote</Link>
          <Link to ="/useEffect1" className="nav-link">useEffect</Link>
  <Link to ="/prop" className="nav-link">Prop</Link>
     
      </div>
    </nav>
  );
};

export default Navbar;
