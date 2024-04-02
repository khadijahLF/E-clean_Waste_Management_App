import React from 'react';

const News = () => {
  return (
    <>

   <div className='newsContainer'>
   <div className='Newheader'>
        <h3>Recent News and Articles</h3>
    </div>

    <div className="news-container">
      <div className="image-container">
        <img src="src\assets\Blogimage1.png" alt="News Image" />
        <div className="imagetext">Trash Trek: Community Cleanup and <br/> Recycling Drive</div>
      </div>
      <div className="text-container">
        <div className="row">
          <div className="row-item">
            <img src="src\assets\Blogimage2.png" alt="News Image" />
                <div className='blogandp'>
                    <div className="blog-title">
                        <p>Blog</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>
                    <p>10 Tips for Effective Waste Sorting at Home</p>
                </div>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src="src\assets\Blogimage3.png" alt="News Image" />
            <div className='blogandp'>
                    <div className="blog-title">
                        <p>Video</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>
                <p>How to Make Natural Cleaning Products from Household Ingredients</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src="src\assets\Blogimage4.png" alt="News Image" />
            <div className='blogandp'>
                    <div className="blog-title">
                        <p>Blog</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>
                <p>The Future of Waste Management: Innovations and Trends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>

    </>
  );
}

export default News;
