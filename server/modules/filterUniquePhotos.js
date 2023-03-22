
function filterUniquePhotos (residence) {
    let newArray = [];
    let lastID = 0;
    let photoArray = residence.residenceImages;
    for (let i = 0; i < photoArray.length; i++) {
        if (photoArray[i].photoId !== lastID) {
            newArray.push(photoArray[i]);
            lastID = photoArray[i].photoId;
        }
    }
    residence.residenceImages = newArray;
    residence.residenceAmenities = filterAmenities(residence);
    return residence;
}

function filterAmenities (residence) {
    let amenitiesArray = residence.residenceAmenities;
    const uniqueAmenities = [...new Map(amenitiesArray.map((amenity) => [amenity.joinId, amenity])).values()];
    return uniqueAmenities;
}

module.exports = filterUniquePhotos;
