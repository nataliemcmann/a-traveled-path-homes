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
router.post('/files', upload.array("file"), async (req, res) => {
    try {
        const results = await s3Upload(req.files);
        console.log(results);
        console.log('success');
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        console.log('fail')
        res.sendStatus(500);
    }
})


module.exports = router;