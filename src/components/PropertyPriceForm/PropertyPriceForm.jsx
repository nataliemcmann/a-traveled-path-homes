import React, {useState} from "react";
import { useDispatch } from "react-redux";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './PriceForm.css'
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
import { useHistory } from "react-router-dom";

function PropertyPriceForm() {
  const history = useHistory();
  const [dailyPrice, setDailyPrice] = useState(70);
  const [monthlyPrice, setMonthlyPrice] = useState(2000);


      function increaseDaily() {
        setDailyPrice(function (prevCount) {
          return (prevCount += 10);
        });
      }
      function decreaseDaily() {
        setDailyPrice(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 10);
          } else {
            return (prevCount = 0);
          }
        });
      }

      function increaseMonthly() {
          setMonthlyPrice(function (prevCount) {
            return (prevCount += 100);
          });
        }
        function decreaseMonthly() {
          setMonthlyPrice(function (prevCount) {
            if (prevCount > 0) {
              return (prevCount -= 100);
            } else {
              return (prevCount = 0);
            }
          });
        }

        const cancelBtn = () => {
          history.push(`/ownerdashboard`)
      }

      const nextBtn = () => {
        history.push(`/review`)
    }

    return (
        <div>
          <PropertyFormNav className="price"/>
        <h1>Price</h1>
        <h4>Prices are recommended based on similar housing in your area. 
            These prices also more accurately represent the cost of housing 
            that a traveling professional is expected to pay</h4>
        <div className="boxflex">
        <Card className="card" sx={{ width: 300, height: 200, borderRadius: 4, color: '#121957' }}>
        <React.Fragment>
          <CardContent>
          <Typography sx={{ fontSize: 30 }} gutterBottom>
            Daily 
          </Typography>
          <Typography variant="h5" component="div">
            ${dailyPrice}
          </Typography>
            </CardContent>
             <CardActions className="cardActions">
              <Button className="button" onClick={decreaseDaily} size="small" variant="outlined">-</Button>
              <Button onClick={increaseDaily} size="small" variant="outlined">+</Button>
            </CardActions>
          <Typography variant="h5" component="div">
            Average: ${dailyPrice}-${dailyPrice + 20}
          </Typography>
        </React.Fragment>
        </Card>
        <Card className="card" sx={{ width: 300, height: 200, borderRadius: 4, color: '#121957' }}>
        <React.Fragment>
          <CardContent>
          <Typography sx={{ fontSize: 30 }} gutterBottom>
            Monthly
          </Typography>
          <Typography variant="h5" component="div">
            ${monthlyPrice}
          </Typography>
            </CardContent>
             <CardActions className="cardActions">
              <Button onClick={decreaseMonthly} size="small" variant="outlined">-</Button>
              <Button onClick={increaseMonthly} size="small" variant="outlined">+</Button>
          </CardActions>
          <Typography variant="h5" component="div">
            Average: ${monthlyPrice}-${monthlyPrice + 500}
          </Typography>
        </React.Fragment>
        </Card>
        </div>
        <div className="cancelBtn"></div>
                <Button onClick={cancelBtn}
                    type="submit" 
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        marginLeft: 4
                    }}
                    >
                        Cancel
                    </Button> 

                    <div className="nextBtn"></div>
                <Button onClick={nextBtn}
                    type="submit" 
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        marginLeft: 160,
                        paddingTop: '16px', paddingBottom: '16px',
                        paddingRight: '32px', paddingLeft: '32px'
                    }}
                    >
                        NEXT
                    </Button> 
        </div>
        
    )
}

export default PropertyPriceForm;