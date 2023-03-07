const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', (req, res) => {
    console.log(req.body);
    const insertResidenceQuery= `
    //  need to add house type 👇
    INSERT INTO "residences" ("propertyName", "description")
    VALUES($1, $2);
    `
    pool.query(insertResidenceQuery, [req.body.propertyName, req.body.description])
    .then(result => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('error inserting property type', err);
        res.sendStatus(500);
    });
});

module.exports = router;