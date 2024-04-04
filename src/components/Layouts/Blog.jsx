import React from 'react';

const Blog = () => {
  return (
    <>
        <div className="blog-container">
        <div className="blog-row">
            <p>Blog</p>
            <p>Video</p>
            <p>Initiative</p>
            <p>News</p>
        </div>
        </div>

        <div className='blog-parent'>
            <div className="blog-content-container">

                <div className="blog-column">

                    <div className="blog-column-wrapper">
                         <img src="src/assets/zero-waste-concept-composition 2.png" alt="Image 3" />      
                        <div className='blog-column-text'>

                            <div className="blog-title2">
                                <p>Blog</p>
                                <p className='date'>21 FEB 2024</p>
                            </div>

                            <h6>10 Tips for Effective Waste Sorting at Home</h6>
                            <p>Waste sorting is a simple yet powerful way to make a positive impact...</p>
                            <p>Read more</p>
                        </div>
                    </div>
                </div>

                <div className="blog-column">

                    <div className="blog-column-wrapper">
                    <img src="src\assets\slider-1 2.png" alt="Image 3" />


                        <div className='blog-column-text'>

                            <div className="blog-title2">
                                <p>Blog</p>
                                <p className='date'>21 FEB 2024</p>
                            </div>

                            <h6>The Future of Waste Management: Innovations and Trends</h6>
                            <p>While sustainability might have been deemed a trend a few years ago...</p>
                            <p>Read more</p>
                        </div>
                    </div>
                    </div>

                <div className="blog-column">

                    <div className="blog-column-wrapper">
                    <img src="src\assets\OTruck.png" alt="Image 3" />
                        <div className='blog-column-text'>

                            <div className="blog-title2">
                            <p>Blog</p>
                            <p className='date'>21 FEB 2024</p>
                            </div>

                            <h6>The Environmental Impact of Plastic Pollution</h6>
                            <p>Waste sorting is a simple yet powerful way to make a positive impact...</p>
                            <p>Read more</p>
                        </div>
                    </div>
                    </div>
                
            </div>
        </div>

    </>
  );
};

export default Blog;
