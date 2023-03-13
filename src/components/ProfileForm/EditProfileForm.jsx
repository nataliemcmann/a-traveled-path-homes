import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui components
import { Stack, TextField, Button } from '@mui/material';
//css style
import './ProfileForm.css';
//react date picker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function EditProfileForm() {

    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const profileEdit = useSelector((store) => store.profileReducer);
    const user = useSelector(store => store.user)

    useEffect(() => {
        console.log('user.id should work, let us make sure!', user.id)
        dispatch({
            type: 'FETCH_PROFILE_TO_EDIT',
            payload: user.id
        })
    },[])

    const firstNameChange = (event) => {
        dispatch({
          type: 'SET_FIRST_NAME',
          payload: event.target.value
        })
      }

      const lastNameChange = (event) => {
        dispatch({
          type: 'SET_LAST_NAME',
          payload: event.target.value
        })
      }

      const dobChange = (event) => {
        dispatch({
          type: 'SET_DOB',
          payload: event.target.value
        })
      }

      const professionChange = (event) => {
        dispatch({
          type: 'SET_PROFRESSION',
          payload: event.target.value
        })
      }

    //   const viewAsRenterChange = (event) => {
    //     dispatch({
    //       type: 'SET_VIEW_AS_RENTER',
    //       payload: event.target.value
    //     })
    //   }

      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
          type: 'EDITED_PROFILE',
          payload: profileEdit
        })
        history.push('/profile');
      }
    

      return (
        <>
            <Stack 
            direction="column"
            spacing={4}
            justifyContent="center"
            >
                <form className="profileForm" onSubmit={handleSubmit}>
                    <div className="profileContent">
                        <h2>Edit Personal Information</h2>
                        <p>First Name</p>
                            <label htmlFor="firstName">
                                <TextField 
                                    type="text"
                                    name="firstName"
                                    value={profileEdit.profile.firstName || ''}
                                    required
                                    onChange={firstNameChange}
                                />
                            </label>
                        <p>Last Name</p>
                            <label htmlFor="lastName">
                                <TextField 
                                    type="text"
                                    name="lastName"
                                    value={profileEdit.profile.lastName || ''}
                                    required
                                    onChange={lastNameChange}
                                />
                            </label>
                        <p>Profession/Area of Expertise</p>
                            <label htmlFor="profession">
                                <TextField 
                                    type="text"
                                    name="profession"
                                    value={profileEdit.profile.profession || ''}
                                    multiline
                                    onChange={professionChange}
                                />
                            </label>
                        <p>Date of Birth</p>
                            <label htmlFor="date-of-birth">
                                <DayPicker 
                                    mode="single"
                                    captionLayout="dropdown" 
                                    fromYear={1900} 
                                    toYear={2002}
                                    defaultMonth={new Date(2002,0)}
                                    selected={profileEdit.profile.dob || ''}
                                    onSelect={dobChange}
                                />
                            </label>
                        </div>
                        <div className="btnContainer">
                            <Button onClick={handleSubmit} type="submit">Save</Button>
                        </div>
                </form> 
            </Stack>
        </>    
    )
}

export default EditProfileForm