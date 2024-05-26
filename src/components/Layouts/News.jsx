import React from 'react';

const News = () => {
  return (
    <>

    <div className='Newheader'>
        <h3>Recent News and Articles</h3>
    </div>

   <div className='newsContainer'>
   

    <div className="news-container">
      <div className="image-container">
        <img src="/assets/Blogimage1.png" alt="News Image" />
        <div className="imagetext">Trash Trek: Community Cleanup and <br/> Recycling Drive</div>
      </div>
      <div className="text-container">
        <div className="row">
          <div className="row-item">
            <img src="/assets/Blogimage2.png" alt="News Image" />
                <div className='blogandp'>
                    <div className='blog-title'>
                        <p >Blog</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>
                    <div className='btit'>
                    <p>10 Tips for Effective Waste Sorting at Home</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src="/assets/Blogimage3.png" alt="News Image" />
            <div className='blogandp'>
                    <div className="blog-titleV">
                        <p>Video</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>

                    <div className='btit'>
                    <p>How to Make Natural Cleaning Products from Household Ingredients</p>
                    </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <img src="/assets/Blogimage4.png" alt="News Image" />
            <div className='blogandp'>
                    <div className="blog-title">
                        <p>Blog</p>
                        <p className='date'>21 FEB 2024</p>
                    </div>
                    
                    <div className='btit'>
                    <p >The Future of Waste Management: Innovations and Trends</p>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>

   <div className='sm-newsContainer'>
   

    <div className="sm-news-container">
        <div className="sm-image-container">
          <img src="/assets/Blogimage1.png" alt="News Image" />
          <div className="imagetext">Trash Trek: Community Cleanup and <br/> Recycling Drive</div>
        </div>
        <div className="sm-text-container">
          <div className="sm-row">
            <div className="sm-row-item">
              <img src="/assets/Blogimage2.png" alt="News Image" />
                  <div className='sm-blogandp'>
                      <div className='sm-blog-title'>
                          <p >Blog</p>
                          <p className='sm-date'>21 FEB 2024</p>
                      </div>
                      <div className='sm-btit'>
                      <p>10 Tips for Effective Waste Sorting at Home</p>
                      </div>
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
