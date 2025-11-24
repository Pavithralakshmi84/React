
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
        <Link to="/state1" className="nav-link">StateImg</Link>
      </div>
    </nav>
  );
};

export default Navbar;
