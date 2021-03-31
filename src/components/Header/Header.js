import './Header.css';
import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                {/* <p style={styles}>PROBA</p> */}

                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/">Dashboard</Link>
                        <Link className="button" to="/home">My Pets</Link>
                        <Link className="button" to="/pet/create">Add Pet</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome, username!</li>
                            <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </section>

                <section className="navbar-anonymous">
                    <ul>
                        <li><a href="#"><i className="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </section>

            </nav>
        </header>
    );
};

export default Header;

