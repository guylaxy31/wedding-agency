import React from 'react';
import '../assets/styles/Footer.scss'
import WeddingAgencyLogo from './WeddingAgencyLogo';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-bg">
                <div className="wedding-logo"><WeddingAgencyLogo /></div>
                <div className="footer-list">
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Our team</a>
                    <a href="/">Happy stories</a>
                    <a href="/">Pricing</a>
                    <a href="/">Gallery</a>
                </div>
                <div className="footer-copyright"><p>2018 Wedding. All Rights Reserved</p></div>
            </div>
        </div>
    )
}

export default Footer