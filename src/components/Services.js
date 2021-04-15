import React from 'react';
import '../assets/styles/Services.scss'

function Services() {
    return (
        <div className="services">
            <div className="service-content-a">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" className="service-a-detail">
                    <p className="p-main-1">Better to have loved and lost, Than to have never loved</p>
                    <p className="p-desc-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="view-more-btn"><p>View More</p></div>
                </div>
                <img data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" src="./public-images/couple.png" alt="couple images"></img>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="service-content-b">
                <div className="b-main-title"><p>Better Services</p></div>
                <div className="b-card-list">
                    <div className="card-item">
                        <div className="img-contain"><img src="./public-icon/venue.svg" alt="venue icon"></img></div>
                        <div className="card-detail">
                            <p className="card-p-1">Venue search</p>
                            <p className="card-p-2">We can help you to find the best venue for your wedding. We work with brand venues both in the UK and abroad.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="img-contain"><img src="./public-icon/wed-detail.svg" alt="wedding icon"></img></div>
                        <div className="card-detail">
                            <p className="card-p-1">Wedding Details</p>
                            <p className="card-p-2">We can help you to find the best venue for your wedding. We work with brand venues both in the UK and abroad.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="img-contain"><img src="./public-icon/planning.svg" alt="planning icon"></img></div>
                        <div className="card-detail">
                            <p className="card-p-1">Planning a party</p>
                            <p className="card-p-2">We can help you to find the best venue for your wedding. We work with brand venues both in the UK and abroad.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div><img src="./public-icon/design.svg" alt="design icon"></img></div>
                        <div className="card-detail">
                            <p className="card-p-1">Design & Style</p>
                            <p className="card-p-2">We can help you to find the best venue for your wedding. We work with brand venues both in the UK and abroad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services