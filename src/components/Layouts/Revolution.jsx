import React from 'react';

const Revolution = () => {
  return (

    <>

    <div className='parent-revcontainer'> 
      <img className="revimage" src="src\assets\medium-shot-smiley-man-with-helmet 1.png" alt="man" />
            
            <div className="content-container">
            <h6 className='underline_txt'>What We Do</h6>
                <h2>Revolutionizing Waste <br/> Management Practices</h2>
                <p>We believe that every piece of waste holds the potential for transformation, not just in terms of environmental sustainability but also as a source of economic opportunity. Our goal is to empower individuals and communities to earn from their recyclable items and to facilitate the seamless flow of these materials to recyclers who need them.</p>
                <br />
                <button>Learn more</button>

                {/* <div className='revPara'>
                    
                </div> */}

                
            </div>

    </div>

                
    {/* New div for 390px screen */}
    <div className="sm-rev-div">
        <p className='sm-p-text'>What We Do</p>
        <h3>Revolutionizing Waste Management Practices</h3>
        <p>We believe that every piece of waste holds the potential for transformation, not just in terms of environmental sustainability but also as a source of economic opportunity. Our goal is to empower individuals and communities to earn from their recyclable items and to facilitate the seamless flow of these materials to recyclers who need them</p>
        <button>Learn More</button>
        <img src="src\assets\Image 2 (1).png" alt="Image" />
    </div>
    
    </>
  );
};

export default Revolution;
