const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    //turn if using AWS S3 to save profile photos
    const userId = req.user.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dob = req.body.dob;
    const profession = req.body.profession;
    const sqlValues = [userId, firstName, lastName, dob, profession];
    const sqlQuery = `
    INSERT INTO "profile"
    ("userId", "firstName", "lastName", "dob", "profession")
    VALUES
    ($1, $2, $3, $4, $5);
    `
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((dbErr) => {
        console.log('Profile post failed: ', dbErr);
        res.sendStatus(500);
    })
});

module.exports = router;