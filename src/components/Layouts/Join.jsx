import React from 'react';

const Join = () => {
  return (

    <>

    <div className='join-head'>
        <p>How it Works</p>
        < hr/>
        <p className='join-head-text'>Join Our Community</p>
    </div>
    <div className="join-container">
      <div className="join-left">
        <div className="numbered-paragraph">
          <div className="paragraph-number">01</div>
          <div className="paragraph-content">
            <h3>Sign Up for Free</h3>
            <p>Begin your journey to responsible waste management by signing up on EClean app. Create your account with a few simple steps.</p>
          </div>
        </div>
        <hr />
        <div className="numbered-paragraph">
          <div className="paragraph-number">02</div>
          <div className="paragraph-content">
            <h3>Navigate the App</h3>
            <p>Choose whether you want to dispose of your waste responsibly or sell your recyclable materials for cash..</p>
          </div>
        </div>
        <hr />
        <div className="numbered-paragraph">
          <div className="paragraph-number">03</div>
          <div className="paragraph-content">
            <h3>Schedule Pick Up/Drop Off</h3>
            <p>Select a convenient date and time for our team to pick up your waste/recycled materials. Alternatively, find nearby disposal centers and schedule a drop-off if preferred.</p>
          </div>
        </div>
        <hr />
        <div className="numbered-paragraph">
          <div className="paragraph-number">04</div>
          <div className="paragraph-content">
            <h3>Pay or Get Paid</h3>
            <p>For Waste Disposal: Upon pickup or drop-off, pay the disposal fee directly through the app.
                For Recycling: Get paid for your recycled materials.</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="join-right">
        <img src="/assets/Image 6.png" alt="Image" />
      </div>
    </div>

    <div  className="join-heroapp-imgs">

        <img src="/assets/App Store Black.png" alt="" />
        <img src="/assets/Google Play Black.png" alt="" />

    </div>
    </>
  );
};

export default Join;
