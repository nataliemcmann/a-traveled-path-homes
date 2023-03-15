const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const addStringDob = require('../modules/addStringDob.js');

/**
 * GET route 
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlValues = [req.user.id];
  const sqlQuery = `
  SELECT
      "user"."username",
      "profile"."firstName",
      "profile"."lastName",
      "profile"."dob",
      "profile"."profession",
      "profile"."viewAsRenter"
    FROM "user"
    LEFT JOIN "profile"
      ON "user"."id" = "profile"."userId"
    WHERE "user"."id" = $1;
  `;
  pool.query(sqlQuery, sqlValues)
  .then((result) => {
      res.send(addStringDob(result.rows[0]));
  })
  .catch(err => {
      console.log('GET profile failed', err);
  });
});

/**
 * POST route 
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    //turn to async await if using AWS S3 to save profile photos
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
/**
 * PUT route 
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const idToUpdate = req.params.id;
    const sqlText = `
    UPDATE "profile"
    SET "firstName"=$1, "lastName"=$2, "dob"=$3, "profession"=$4, "viewAsRenter"=$5
    WHERE "userId"=$6
    `;
    pool.query(sqlText, [
      req.body.firstName,
      req.body.lastName,
      req.body.dob,
      req.body.profession,
      req.body.viewAsrenter,
      idToUpdate
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error making db query ${sqlText}`, error);
      res.sendStatus(500);
    });
  });

module.exports = router;