import React from 'react';
import './Attending.scss'

function Attending() {
    return (
        <div className="attending">
            <div className="at-form">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="form-title"><p>Are You Attending?</p></div>
                <div className="form-input">
                    <input placeholder="Name"></input>
                    <input placeholder="Email Address"></input>
                    <input className="input-h" placeholder="Message"></input>
                    <div className="send-btn">
                        <p>Send Message</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Attending