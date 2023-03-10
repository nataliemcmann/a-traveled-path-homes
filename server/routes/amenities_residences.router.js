const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')



router.post('/', rejectUnauthenticated, (req, res) => {
  const sqlValues = [req.body.amenitiesId, req.body.residenceId];
  const sqlQuery = `
  INSERT INTO "amenities_residences"
      ("amenitiesId", "residenceId")
  VALUES
      ($1, $2);
  `;
  pool.query(sqlQuery, sqlValues)
  .then(() => res.sendStatus(201))
  .catch((err) => {
      console.log('Task-user relation post failed: ', err);
      res.sendStatus(500);
  })
})