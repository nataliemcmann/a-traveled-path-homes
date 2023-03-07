import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//mui components
import { Stack, TextField, Button } from '@mui/material';
//css style
import './ProfileForm.css';
//react date picker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function ProfileForm() {
    //declare dispatch
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date(2002, 0, 1));
    const [profession, setProfession] = useState('');

    const postProfileInfo = (event) => {
        event.preventDefault();

        const profileObject = {
            firstName,
            lastName,
            dob,
            profession
        }
        //confirm object format
        console.log(profileObject);
        //dispatch to saga
        dispatch({
            type: 'ADD_PROFILE',
            payload: profileObject
        })
    }


    return (
        <>
            <Stack 
            direction="column"
            spacing={4}
            justifyContent="center"
            >
                <form className="profileForm" onSubmit={postProfileInfo}>
                    <div className="profileContent">
                        <h2>Personal Information</h2>
                        <p>First Name</p>
                            <label htmlFor="firstName">
                                <TextField 
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    required
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </label>
                        <p>Last Name</p>
                            <label htmlFor="lastName">
                                <TextField 
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    required
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </label>
                        <p>Profession/Area of Expertise</p>
                            <label htmlFor="profession">
                                <TextField 
                                    type="text"
                                    name="profession"
                                    value={profession}
                                    multiline
                                    onChange={(event) => setProfession(event.target.value)}
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
                                    selected={dob}
                                    onSelect={setDob}
                                />
                            </label>
                        </div>
                        <div className="btnContainer">
                            <Button type="submit">Save</Button>
                        </div>
                </form> 
            </Stack>
        </>    
    )
}

export default ProfileForm;
