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

module.exports = router;