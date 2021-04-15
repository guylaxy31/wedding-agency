import React from 'react';
import '../assets/styles/Blog.scss'

function Blog() {
    return (
        <div className="blog">
            <div className="blog-title"><p>Latest Blog</p></div>
            <div className="blog-list">
                <div className="blog-card">
                    <div className="blog-img-contain"><img src="./public-images/blog-01.svg" alt="blog image"></img></div>
                    <div className="blog-title-div"><p className="blog-title-card">Rustic Wedding Party</p></div>
                    <p className="blog-post">Bustling metropolis isn’t considered as a usual place for wedding ceremony. We bet that you don’t think about graffities…</p>
                </div>

                <div className="blog-card">
                    <div className="blog-img-contain"><img src="./public-images/blog-02.svg" alt="blog image"></img></div>
                    <div className="blog-title-div"><p className="blog-title-card">Rustic Wedding Party</p></div>
                    <p className="blog-post">Bustling metropolis isn’t considered as a usual place for wedding ceremony. We bet that you don’t think about graffities…</p>
                </div>

                <div className="blog-card">
                    <div className="blog-img-contain"><img src="./public-images/blog-03.svg" alt="blog image"></img></div>
                    <div className="blog-title-div"><p className="blog-title-card">Rustic Wedding Party</p></div>
                    <p className="blog-post">Bustling metropolis isn’t considered as a usual place for wedding ceremony. We bet that you don’t think about graffities…</p>
                </div>
            </div>
        </div>
    )
}

export default Blog