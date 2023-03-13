const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const addStringDob = require('../modules/addStringDob.js');

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlValues = [req.user.id];
    const sqlQuery = `
    SELECT
        "instructions"."wifiInformation",
        "instructions"."safetyProtocal",
        "instructions"."contactInformation",
        "instructions"."checkInDetails",
        "instructions"."checkOutDetails"
      FROM "residences"
      LEFT JOIN "instructions"
        ON "residences"."id" = "instructions"."residencesId"
      WHERE "residences"."id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.send(addStringDob(result.rows[0]));
    })
    .catch(err => {
        console.log('GET profile failed', err);
    });
  });


router.post('/', rejectUnauthenticated, (req, res) => {
    //turn to async await if using AWS S3 to save profile photos
    const residencesId = req.body.residencesId;
    const wifiInformation = req.body.wifiInformation;
    const safetyProtocal = req.body.safetyProtocal;
    const contactInformation = req.body.contactInformation;
    const checkInDetails = req.body.checkInDetails;
    const checkOutDetails = req.body.checkOutDetails;
    const sqlValues = [residencesId, wifiInformation, safetyProtocal, contactInformation, checkInDetails,checkOutDetails];
    const sqlQuery = `
    INSERT INTO "instructions"
    ("residencesId", "wifiInformation", "safetyProtocal", "contactInformation", "checkInDetails", "checkOutDetails")
    VALUES
    ($1, $2, $3, $4, $5, $6);
    `
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((dbErr) => {
        console.log('Instructions post failed: ', dbErr);
        res.sendStatus(500);
    })
});

module.exports = router;