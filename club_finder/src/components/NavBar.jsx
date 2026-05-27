import { NavLink } from 'react-router-dom';

function NavBar() {
    function navStyle({isActive}) {
        return isActive ? 'text-amber-100 font-bold transition-all duration-300 hover:scale-105' : 'text-white transition-all duration-300 hover:scale-105';
    }
    return (
        <nav className="bg-blue-500 text-shadow-black p-4 flex gap-6">
            <NavLink to="/" className={navStyle}>Home</NavLink>
            <NavLink to="/clubs" className={navStyle}>Clubs</NavLink>
            <NavLink to="/about" className={navStyle}>About</NavLink>
        </nav>
    );
}

export default NavBar;