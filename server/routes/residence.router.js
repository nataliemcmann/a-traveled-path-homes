const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');



router.get('/:id', (req, res) =>{
  const currentPrice = req.params.id
  const sqlQuery = `SELECT * FROM "residences" WHERE "price" = $1;`;
  // const sqlValue = [currentPrice]; 
  pool
  .query(sqlQuery,currentPrice)
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    console.log("ERROR in /api/residence GET route", error);
    res.sendStatus(500);
  });
})





router.post('/', (req, res) => {
    console.log(req.body);
    const insertResidenceQuery= `
    INSERT INTO "residences" ("houseType", "propertyName", "description", "address", "maxGuests", "bedrooms", "beds", "bathrooms", "listed", "featurePhoto")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
    `
    pool.query(insertResidenceQuery, [req.body.houseType, req.body.propertyName, req.body.description, req.body.address, req.body.maxGuests, req.body.bedrooms, req.body.beds, req.body.bathrooms, req.body.listed, req.body.featurePhoto])
    .then(result => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('error inserting property type', err);
        res.sendStatus(500);
    });
});

module.exports = router;