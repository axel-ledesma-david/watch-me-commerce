import React from 'react'
import '../NavBar/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Watch Me</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto m-auto my-2 my-lg-0 navbar-nav-scroll" style={{ height: "100%" }}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Analogicos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Digital</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#'>Smart Watch</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar