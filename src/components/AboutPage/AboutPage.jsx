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
      <div className='whatWeOffer'>
        <h1> Each home offers </h1>
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
            sx={{ width: '300px', margin: '2%',
            border: "none", boxShadow: "none" }}
            >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='center'
              padding={2}
              marginTop={2}
              marginBottom={2}
              >
                <img id="chair"
                src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Group+4452.png"/>
                <p>Fully furnished spaces</p>
              </Grid>
            </Card>
            <Card
            sx={{ width: '300px', margin: '2%',
            border: "none", boxShadow: "none" }}
            >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='center'
              marginBottom={2}
              >
                <img id="kitchen"
                src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Group+4453.png"/>
                <p>Full kitchens</p>
              </Grid>
            </Card>
            <Card
            sx={{ width: '300px', margin: '2%', 
            border: "none", boxShadow: "none" }}
            >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='center'
              padding={2}
              marginTop={2}
              marginBottom={2}
              >
                <img id="laundry"
                src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Group+4454.png"/>
                <p>Washer and dryer</p>
              </Grid>
            </Card>
          </Grid>
      </div>

      <div className="reviews">
        <h1>Don't take our word it</h1>
        <Grid
        container spacing={3}
        direction='row'
        flexWrap='nowrap'
        justifyContent='space-evenly'
        >
          <Card
          sx={{ width: '305px', margin: '2%',
          border: "none", boxShadow: "none" }}
          >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='left'
              padding={2}
              marginTop={2}
              marginBottom={2}
              >
                <img className="reviewImage" src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+104.png" alt="" />
                <p> 
                  I’ll always use A Traveled Path Homes for my Travel Nurse contracts! With services only for traveling professionals, I’m not competing with a horde of other people trying to book vacations.
                </p>
              </Grid>
          </Card>

          <Card
          sx={{ width: '305px', margin: '2%',
          border: "none", boxShadow: "none" }}
          >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='left'
              padding={2}
              marginTop={2}
              marginBottom={2}
              >
              <img className="reviewImage" src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+105.png" alt="" />
              <p> 
                Consistent, Affordable, but most of all-- Reliable. I can always count on finding a place to stay for my traveling teacher contracts because of A Traveled Path Homes.
              </p>
              </Grid>
          </Card>

          <Card
          sx={{ width: '305px', margin: '2%',
          border: "none", boxShadow: "none" }}
          >
              <Grid
              container spacing={1}
              direction='column'
              justifyContent='center'
              textAlign='left'
              padding={2}
              marginTop={2}
              marginBottom={2}
              >
                <img className="reviewImage" src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/Rectangle+106.png" alt="" />
                <p> 
                  A Traveled Path Homes-- I’m disappointed. In myself, for not using their services much earlier. I can go anywhere I need to for work and know that ATPH always has my back.
                </p>
              </Grid>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default AboutPage;
