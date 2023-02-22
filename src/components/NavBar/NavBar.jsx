import React from 'react'
import '../NavBar/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {




    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to='/' >Watch Me</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto m-auto my-2 my-lg-0 navbar-nav-scroll" style={{ height: "100%" }}>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/category/${'Analog'}`}>Analog</Link></li>
                                <li><Link className="dropdown-item" to={`/category/${'Digital'}`} >Digital</Link></li>
                                <li><Link className="dropdown-item" to={`/category/${'SmartWatch'}`}>Smart Watch</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar