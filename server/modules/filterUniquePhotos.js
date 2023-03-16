
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
    return residence;
}

module.exports = filterUniquePhotos;
