const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')



//GET route to get all amenities
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET /api/amenities');

  const sqlQuery = 
  `SELECT * FROM "amenities"`
  pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('GET things failed:', dbErr);
      res.sendStatus(500);
    })
});