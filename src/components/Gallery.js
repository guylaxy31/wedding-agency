import React from 'react';
import '../assets/styles/Gallery.scss'

function Gallery() {
    return (
        <div className="gallery">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="gall-container">
                <p className="gall-title">Wedding Photo Gallery</p>
                <div className="gall-list">
                    <div class="image-1-contain"><img src="./public-images/gall-1.svg" alt="gallery image1"></img></div>
                    <div className="gall-item-col">
                        <img src="./public-images/gall-2.svg" alt="gallery image2"></img>
                        <img src="./public-images/gall-3.svg" alt="gallery image3"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery