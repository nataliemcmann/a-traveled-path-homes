import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div >
      <div>
        <h1> What we do</h1>
        <div className='aboutUs'>
        <div className="about">
        We create an online community of traveling medical professionals and educators.
      </div>
      <div className="about">
        We keep you safe by examining proof of ownership and requiring verification badges.
      </div>
      <div className="about">
        We protect your trip with unit inspections and we offer transaction insurance 
      </div>
      </div>
      </div>
      <div className='offer'>
       <h2> Each home offers </h2>
      </div>
      <div>
        <h4>Fully furnished spaces</h4>
      </div>
      <div>
        <h4>Fully kitchens</h4>
      </div>
      <div>
        <h4>Washer and dryer</h4>
      </div>
      <div>
        <h2>Don't take our word it</h2>
      </div>
      <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div><div className="feedback">
              <p> I’ll always use A Traveled Path Homes for my Travel Nurse contracts! With services only for traveling professionals, I’m not competing with a horde of other people trying to book vacations.
              </p>
              <div className="travelRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.9</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div><div className="feedback">
              <p> Consistent, Affordable, but most of all-- Reliable. I can always count on finding a place to stay for my traveling teacher contracts because of A Traveled Path Homes.
              </p>
              <div className="travelRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.8</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div><div className="feedback">
              <p> A Traveled Path Homes-- I’m disappointed. In myself, for not using their services much earlier. I can go anywhere I need to for work and know that ATPH always has my back.
              </p>
              <div className="travelRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.5</div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default AboutPage;
