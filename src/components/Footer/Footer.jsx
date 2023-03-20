import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/LogoMarcaPersonalMinimalistaEleganteyOrgánicoBlancoyNegro.png'


const Footer = () => {
    return (
        <div className='footer d-flex flex-column justify-content-center align-items-center'>
            <div className="icons d-flex gap-2">
                <ion-icon name="logo-facebook" className="icon-size" ></ion-icon>
                <ion-icon name="logo-instagram" className="icon-size" ></ion-icon>
                <ion-icon name="logo-twitter" className="icon-size" ></ion-icon>
                <ion-icon name="logo-github" className="icon-size" ></ion-icon>
            </div>
            <img src={logo} alt="logo" className='logo' />
            <p>Copyright © 2023 Watch Me</p>

        </div>
    )
}

export default Footer