//function to add dob as a string
function addStringDob(profile){
    let sqlDate = profile.dob;
    profile.stringDob = convertDate(new Date(sqlDate));
    return profile;
}

//helper function to convert to month date year
function convertDate(date) {
    const months = [
        'January', 'February', 'March', 
        'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 
        'November', 'December'
    ]
    return months[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear();
}


// tests for addStringDob function
// let test1 =     {
//     "username": "new-user",
//     "firstName": "Elmo",
//     "lastName": "Monster",
//     "dob": "1972-01-01T06:00:00.000Z",
//     "profession": "dog",
//     "viewAsRenter": false
// }

// console.log(addStringDob(test1));

module.exports = addStringDob;