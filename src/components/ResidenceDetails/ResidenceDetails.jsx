import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import  Card  from '@mui/material/Card';
import { Button } from '@mui/material';
import './ResidenceDetails.css';

function ResidenceDetails(residences) {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const propertyReducer = useSelector(store => store.propertyReducer)


    useEffect(() => {
        dispatch({
            type: 'FETCH_RESIDENCE',
            payload: params.id 
        })
    }, [params.id])


    const backToProperties = () => {
        history.push(`/propertygallery`)
}

  return(
    <>
    <Card sx={{
        border: "none", 
        boxShadow: "none",
        backgroundColor: '#FFF',
        color: '#111856',
        maxWidth: 800,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 8,
        marginRight: 8,
        padding: 3,
        lineHeight: 1,
        textAlign: 'left',
        borderRadius: 6

    }}
    >
        <Card sx={{
            textAlign: 'left',
            fontSize: 25,
            backgroundColor: '#FFF',
            color: '#410064',
            lineHeight: 1,
            fontFamily: 'Rugrats Sans',
            padding: 1.5,
            lineHeight: 1,
            textAlign: 'left',
            borderRadius: 4,
            border: "none", 
        boxShadow: "none"
        }}>{propertyReducer.residence.propertyName}</Card >
        <br></br>
        <Card sx={{
            textAlign: 'left',
            fontSize: 22,
            backgroundColor: '#FFFFFF',
            color: '#410064',
            lineHeight: 1,
            fontFamily: 'Rugrats Sans',
            padding: 1.5,
            lineHeight: 1,
            textAlign: 'left',
            borderRadius: 4,
            marginBottom: 2,
            border: "none", 
        boxShadow: "none"
        }}>
        
            <p>House Type: {propertyReducer.residence.houseType}</p>
            <p>{propertyReducer.residence.propertyName}</p>
            <p>Description: {propertyReducer.residence.description}</p>
            
            </Card>
            

    <Button sx={{
        color: '#FFF',
        padding: 1,
        backgroundColor: '#D1877F',
        marginLeft: 4
    }} onClick={() => backToProperties(residences)}>Back</Button>
        </Card>
    </>
)

}

export default ResidenceDetails;
