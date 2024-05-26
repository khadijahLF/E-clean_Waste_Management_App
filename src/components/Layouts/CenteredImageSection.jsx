import React from 'react';


const CenteredImageSection = ({ imageSrc, leftText, rightText }) => {
  return (

    <>
    
    <div className='Gen-div'>

        <div className='why-eclean'>
            <p>Why EClean</p>
            <hr />
        </div>

        <div className='title-center'>
            <h1>Simplified Waste Management <br/> and Recycling</h1>
        </div>


        <div className="centered-image-section">

        
            <div className="left-text">
                
                <div className='left-items'>
                        
                        <div className='left1'>
                            <div className='box1'>01</div>
                            <h3>User-Friendly Interface</h3>
                            <p>Our app is designed with simplicity and ease of use in mind. You can easily manage your waste materials and transactions with just a few taps.</p>
                        </div>

                        <div className='left1'>
                            <div className='box1'>02</div>
                            <h3>Real-Time Notifications</h3>
                            <p>Stay informed and connected with real-time notifications from the app. Receive instant alerts on notifications when your scheduled pickups are confirmed. </p>
                        </div>
                        
                        
                </div>
            </div>

            <div className="centerImg">
                <img src="/assets/Group 99.png" alt="Centered Image" />
            </div>

            <div className="right-text">
               <div className='right1'>
                    <div className='box1'>03</div>
                    <h3>Secure Transactions</h3>
                    <p>Rest assured that your transactions within the app are safe and secure. Your payments are protected using robust security measures</p>
               </div>
               <div className='right2'>
                    <div className='box1'>04</div>
                    <h3>24/7 Support</h3>
                    <p>Have questions or need assistance at any time? We offer 24/7 support to address your queries and provide assistance whenever you need it.</p>
               </div>
            </div>

        </div>
    </div>

    <div className='sm-Gen-div'>

        <div className='why-eclean'>
            <p>Why EClean</p>
            <hr />
        </div>

        <div className='sm-title-center'>
            <h1>Simplified Waste Management <br/> and Recycling</h1>
        </div>


        <div className="sm-centered-image-section">


            <div className="sm-left-text">
                
                <div className='sm-left-items'>
                
                        <div className='sm-left1'>
                            <div className='box1'>01</div>
                            <div className='sm-left-text'>
                                <h3>User-Friendly Interface</h3>
                                <p>Our app is designed with simplicity and ease of use in mind. You can easily manage your waste materials and transactions with just a few taps.</p>
                            </div>
                        </div>

                        <div className='sm-left1'>
                            <div className='box1'>02</div>
                            <div className='sm-left-text'>
                                <h3>Real-Time Notifications</h3>
                                <p>Stay informed and connected with real-time notifications from the app. Receive instant alerts on notifications when your scheduled pickups are confirmed. </p>
                            </div>
                        </div>

                        
                        <div className='sm-left1'>
                                <div className='box1'>03</div>
                                <div className='sm-left-text'>
                                    <h3>Secure Transactions</h3>
                                    <p>Rest assured that your transactions within the app are safe and secure. Your payments are protected using robust security measures</p>
                                </div>
                        </div>
                        <div className='sm-left1'>
                                <div className='box1'>04</div>
                                <div className='sm-left-text'>
                                    <h3>24/7 Support</h3>
                                    <p>Have questions or need assistance at any time? We offer 24/7 support to address your queries and provide assistance whenever you need it.</p>
                                </div>
                        </div>

                        
                        
                </div>
            </div>

            <div className="sm-centerImg">
                <img src="/assets/Group 99.png" alt="Centered Image" />
            </div>

        

        </div>
        </div>

    </>
  );
};

export default CenteredImageSection;
