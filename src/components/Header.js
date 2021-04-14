import './Header.scss'
import WeddingAgencyLogo from '../components/WeddingAgencyLogo';
import React, { useState, useEffect } from 'react';

function Header() {
    const [drawerstate, setdrawerstate] = useState(false);
    const [drawerstyle, setdrawerstyle] = useState('none');
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    const toggleDrawer = () => {
        setdrawerstate(!drawerstate)
        drawerstate === true ? setdrawerstyle('flex') : setdrawerstyle('none');

    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [width])

    return (
        <div className="header">
            <div className="header-bg">
                <div className="drawer-btn"><img onClick={() => toggleDrawer()} src="./public-icon/drawer-icon.png" alt="drawer icon"></img></div>
                <div className="nav-container">
                    <div className="wedding-logo"><WeddingAgencyLogo className="main-logo" /></div>
                    {width > 768 ? <div className="nav-menu-list" ><a href="#">Home</a><a href="#">About us</a><a href="#">Services</a><a href="#">Gallery</a><a href="#">Blog</a><a href="#">Contact</a></div>
                        : <div className="nav-menu-list" style={{ display: drawerstyle }}><a href="#">Home</a><a href="#">About us</a><a href="#">Services</a><a href="#">Gallery</a><a href="#">Blog</a><a href="#">Contact</a></div>
                    }
                    <div></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="header-content">
                    <h1>We Are Best Wedding Agency</h1>
                    <p>Perfect day & perfect time</p>
                    <div className="view-more-btn"><p>View More</p></div>
                </div>
            </div>
        </div>
    )
}

export default Header