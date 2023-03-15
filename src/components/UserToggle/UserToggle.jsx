import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch } from '@mui/material'
import profileReducer from "../../redux/reducers/profile.reducer";



function UserToggle ({currentView}) {
const dispatch = useDispatch(); 
const profileReducer= useSelector (store => store.profileReducer);
const user=useSelector (store => store.user)

// const handleToggle = () => {
//     console.log('Looking for View')
//     dispatch({
//         type:'SET_VIEW_AS_RENTER',
//         payload:user.id
//     })
// }

function handleToggle (){
    let newView = !currentView
    console.log(newView)
    dispatch({
        type:'SET_VIEW_AS_RENTER',
        payload:newView
    })

    dispatch ({
        type: 'EDITED_PROFILE',
        payload: {editProfile: profileReducer.profileEdit, userId: user.id}
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