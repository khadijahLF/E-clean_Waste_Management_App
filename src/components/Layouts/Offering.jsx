import React from 'react';

const Offering = () => {
  return (
    <>
       <div className='offering-sec'>
            <div className='our-serviceP'> 
                    <p>Our Services
                    <hr /> 
                    </p> 
                     
            </div>

            <div className="offer-header">
                <h2>What We Are Offering</h2>
                <button className='offer-btn'>Download App</button>
            </div> 

            <div className='Offering-parent'>
                <div className="offering-container">

                <div className="column">

                    <div className="column-wrapper">
                        <div className="icon-square">
                            <img src="src\assets\Frame.png" alt="Icon 3" className='icon-img' />
                        </div>
                        <div className='columnn-img'>
                        <img src="src\assets\Image 3.png" alt="Image 1" />
                        </div>
                        
                        <div className='column-text'>
                            <h3>Recycling Service</h3>
                            <p>Turn your recyclables into rewards! Simply upload photos, schedule a pickup, and get paid for your contribution to a sustainable future. It's easy, convenient, and environmentally friendly</p>
                        </div>
                </div>
                </div>
                <div className="column">

                    <div className="column-wrapper">
                        <div className="icon-square">
                            <img src="src\assets\car.png" alt="Icon 3" className='icon-img' />
                        </div>
                        <img src="src\assets\Image 4 (1).png" alt="Image 2" />
                        <div className='column-text'>
                            <h3>Waste Disposal Service</h3>
                            <p>Dispose of your waste responsibly with EClean. Find nearby disposal centers, drop-off points, or schedule a pickup. Let's keep our communities clean and green together.</p>
                        </div>
                    </div>
                </div>
                <div className="column">

                    <div className="column-wrapper">
                        <div className="icon-square">
                            <img src="src\assets\person.png" alt="Icon 3" className='icon-img' />
                        </div>
                        <img src="src\assets\Image 5 (1).png" alt="Image 3" />
                        <div className='column-text'>
                        <h3>Waste Disposal Service</h3>
                        <p>Join us in making a difference! From educational workshops to cleanup drives, we're committed to fostering a culture of sustainability. Together, let's create a positive impact on our environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>

    
    </>
    
  );
};

export default Offering;
