const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/** ---------- Multer | S3 ---------- **/
const multer = require('multer');
require('dotenv').config();
const storage = multer.memoryStorage()
const fileFilter = (req, file, cb) =>{
    if(file.mimetype.split('/')[0] === 'image'){
        cb(null, true)
    } else{
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
    }
}

const upload = multer({storage, fileFilter});
const { s3Upload } = require('../s3Service');



/**
 * POST route 
 */
router.post('/files', rejectUnauthenticated, upload.array("file"), async (req, res) => {
    try {
        const results = await s3Upload(req.files);
        const locationArray = results.map((result) => {
            return result.Location;
        })
        // console.log(req.body.residenceId); this is an array of strings
        const residenceId = Number(req.body.residenceId[0]) //make it a number
        // console.log(residenceId); 
        console.log('AWS S3 upload success');
        const sqlQuery = `
        INSERT INTO "photos"
            ("residenceId", "imagePath")
        VALUES ($1, $2);
        `;
        //loop through location array and post each to the photos database
        locationArray.map((location) => {
            const sqlValues = [residenceId, location];
            pool.query(sqlQuery, sqlValues);
        })
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        console.log('AWS S3 upload fail')
        res.sendStatus(500);
    }
})

//get all residence photos
router.get('/:residenceId', rejectUnauthenticated, (req, res) => {
        const residenceId = req.params.residenceId;
        const sqlValues = [residenceId];
        const sqlQuery = `
        SELECT * FROM "photos"
        WHERE "residenceId" = $1;
        `;
        pool.query(sqlQuery, sqlValues)
        .then((result) => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Get photos of residence', err);
        })
})

//delete a photo
router.delete('/:photoId', rejectUnauthenticated, (req, res) => {
    const photoId = req.params.photoId;
    const sqlValues = [photoId];
    const sqlQuery = `
    DELETE FROM "photos"
    WHERE "id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('Delete a photo route failed: ', err);
    })
})


module.exports = router;