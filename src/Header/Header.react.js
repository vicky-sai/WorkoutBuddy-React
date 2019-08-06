import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">Workout Buddy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/fetchBuddy'className="nav-link">My buddies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/addBuddy' className="nav-link">Add buddy</Link>
                    </li>
                    <li className=" dropdown">
                        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            Digital hangout
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/addMine'>Post mine</Link>
                            <Link className="dropdown-item" to='/fetchPosts'>See buddies post</Link>
                        <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to='/'>Looking for something else..</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to=''>Settings</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        
    </div>
    );
}

export default Header;