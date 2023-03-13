const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('GET /api/property');
  const sqlQuery = 
  `
  SELECT * FROM "property"
  `
  pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('GET things failed:', dbErr);
      res.sendStatus(500);
    })
});


router.get('/:id', (req, res) => {
  console.log('req.params.id', req.params.id);
  const propertyId = req.params.id;
  const sqlQuery = `
    SELECT * FROM "property"
    WHERE "property"."id"=$1
  `
  const sqlValues = [propertyId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log('dbRes', dbRes.rows[0]);
      res.send(dbRes.rows[0]);
    })
    .catch((dbErr) => {
      console.log('GET /api/property/:id fail:', dbErr);
      res.sendStatus(500);
    })
})

module.exports = router;