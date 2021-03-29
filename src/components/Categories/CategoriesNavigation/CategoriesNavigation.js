import { NavLink } from 'react-router-dom';
import './CategoriesNavigation.css';

const CategoriesNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/cats">Cats</NavLink></li>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/dogs">Dogs</NavLink></li>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/parrots">Parrots</NavLink></li>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/reptiles">Reptiles</NavLink></li>
                <li><NavLink activeClassName='nav-link-selected' to="/categories/others">Others</NavLink></li>
            </ul>
        </nav>
    );
};


export default CategoriesNavigation;
