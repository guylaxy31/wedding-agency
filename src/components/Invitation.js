import React from 'react';
import '../assets/styles/Invitation.scss'

function Invitation() {
    return (
        <div className="invitation">
            <div className="invite-bg" >
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" className="invite-header">
                    <div className="invite-h-p1">ARE GETTING MARRIED!</div>
                    <div className="invite-h-p2">HENRY AND ANGELINA BRIDE</div>
                </div>
                <div className="invite-suggest-couple">
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" className="iv-img-couple"><img src="./public-images/couple-1.svg" alt="couple image1"></img></div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="iv-desc">
                        <p className="p-iv-title">Invitation</p>
                        <p className="p-iv-desc">We Inviting You<br></br>And Your Family On</p>
                        <p className="p-day">Friday</p>
                        <p className="p-date">17 AUGUST, 2018</p>
                        <p className="p-iv-desc">At St. Thomas’s<br></br>Church, London, U.K.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" className="iv-img-couple"><img src="./public-images/couple-2.svg" alt="couple image2"></img></div>
                </div>
            </div>
        </div>
    )
}

export default Invitation