import React from 'react';
import './AboutPage.css';
import { Grid, Card } from '@mui/material';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <div className="whatWeDo">
        <h1> What we do</h1>
      <Grid
      margin={1}
      marginLeft={2}
      marginRight={4}
      paddingLeft={2}
      paddingRight={8}
      container spacing={3}
      direction='row'
      flexWrap='nowrap'
      justifyContent='space-evenly'
      >
          <Card
          sx={{ width: '300px', margin: '2%'}}
          >
            <Grid
            container spacing={2}
            direction='row'
            flexWrap='nowrap'
            padding={2}
            marginTop={2}
            marginBottom={2}
            >
              <img id="suitcase"
              src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/suitcasesuitcase.png"/>
              <p>
                We create an online community of traveling medical professionals and educators.
              </p>
            </Grid>
          </Card>
          <Card
          sx={{ width: '300px', margin: '2%'}}
          >
            <Grid
            container spacing={2}
            direction='row'
            flexWrap='nowrap'
            padding={2}
            marginTop={2}
            marginBottom={2}
            >
              <img id="key"
              src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Group+4455key.png"/>
              <p>
                We keep you safe by examining proof of ownership and requiring verification badges.
              </p>
            </Grid>
          </Card>
          <Card
          sx={{ width: '300px', margin: '2%'}}
          >
            <Grid
            container spacing={2}
            direction='row'
            flexWrap='nowrap'
            padding={2}
            marginTop={2}
            marginBottom={2}
            >
              <img id="money"
              src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Group+4462.png"/>
              <p>
                We protect your trip with unit inspections and we offer transaction insurance. 
              </p>
            </Grid>
          </Card>
        </Grid>
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
            <img src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+104.png" alt="" />
          </div>
          <div className="feedback">
              <p> I’ll always use A Traveled Path Homes for my Travel Nurse contracts! With services only for traveling professionals, I’m not competing with a horde of other people trying to book vacations.
              </p>
            </div>
          </div>
          <div className="container">
          <div className="img-container">
            <img src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+105.png" alt="" />
          </div>
            <div className="feedback">
              <p> Consistent, Affordable, but most of all-- Reliable. I can always count on finding a place to stay for my traveling teacher contracts because of A Traveled Path Homes.
              </p>
            </div>
          </div>
          <div className="container">
          <div className="img-container">
            <img src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+106.png" alt="" />
          </div>
            <div className="feedback">
              <p> A Traveled Path Homes-- I’m disappointed. In myself, for not using their services much earlier. I can go anywhere I need to for work and know that ATPH always has my back.
              </p>
            </div>
        </div>
    </div>
  );
}

export default AboutPage;
