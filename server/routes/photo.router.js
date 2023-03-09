const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/** ---------- Multer | S3 ---------- **/
const multer = require('multer');
require('dotenv').config();
const upload = multer({ dest: "uploads/"});


/**
 * POST route 
 */
router.post('/files', upload.array("file"), (req, res) => {
    if(req.files) {
        console.log(req.files)
        console.log('success');
    } else {
        console.log(req.files)
        console.log('fail')
    }
})


module.exports = router;