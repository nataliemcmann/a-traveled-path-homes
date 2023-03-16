import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch } from '@mui/material'



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

    return (

        <>
            <p> Owner View</p> 
            <Switch onChange={handleToggle}/>  
            <p> Renter View</p>
        </>
    )

}

export default UserToggle; 