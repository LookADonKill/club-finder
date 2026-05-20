import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-blue-500 text-shadow-black p-4 flex gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

export default NavBar;