import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Grid, Switch } from '@mui/material';

function ResidencesItem({residences}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const showResidencesDetails = () => {
    history.push(`/residences/${residences.id}`);
}

function changeListing (event) {
  event.preventDefault();
  let listingStatus = !residences.listed
  console.log(listingStatus);
  dispatch ({
    type: 'CHANGE_LISTED',
    payload: {
        listingStatus: listingStatus, 
        residenceId: residences.id
    }
})
}

  return(
    <>
      <div>
      <Card onClick={showResidencesDetails}
      sx={{
        
        lineHeight: .5,
        width: 240,
        height: 340,
        padding: 1.5,
        borderRadius: 4
      }}>
        <img src={residences.featurePhoto}/>
        <Card sx={{textAlign: 'center',
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        color: '#410064',
        marginTop: 2,
        border: "none", 
                  boxShadow: "none",
        }}>
          <h3>{residences.propertyName}</h3>
          <h4>Monthly Price: {residences.priceMonthly}</h4>
        </Card>
      </Card>
    <Grid
    container spacing = {2}
    direction = 'row'
    marginLeft={4}
    padding={2}
    >
      <p>Unlisted</p>
      <Switch onChange={changeListing}/>
      <p>Listed</p>
    </Grid>
  </div>
  </>

  )
}

export default ResidencesItem;