import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Grid } from '@mui/material'



function UserToggle ({currentView}) {
const dispatch = useDispatch(); 
const user=useSelector (store => store.user)

function handleToggle (event){
    event.preventDefault();
    let newView = !currentView
    console.log(newView)
    dispatch ({
        type: 'CHANGE_VIEW',
        payload: {
            newView: newView, 
            userId: user.id
        }
    })
}

return (currentView) ? (
        <>
            <Grid 
            container spacing = {2}
            direction = 'row'
            marginLeft={4}
            padding={2}
            sx={{ 
                backgroundColor: '#CE8077', 
                borderRadius: '20px',
                width: '20%',
                color: 'white',
                fontSize: '16px'
                }}
            >
                <p> Renter View</p>
                <Switch defaultChecked color="default" onChange={handleToggle}/>  
                <p> Owner View</p> 
            </Grid>
            
        </>
    ) : (
        <>  
            <Grid 
            container spacing = {2}
            direction = 'row'
            marginLeft={4}
            padding={2}
            sx={{ 
                backgroundColor: '#CE8077', 
                borderRadius: '20px',
                width: '20%',
                color: 'white',
                fontSize: '16px'
                }}
            >
                <p> Renter View</p>
                <Switch color="default" onChange={handleToggle}/>  
                <p> Owner View</p> 
            </Grid>
        </>
    )
}

export default UserToggle; 