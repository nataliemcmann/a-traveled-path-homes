const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlValues = [
        req.user.id, req.body.houseType, req.body.propertyName, 
        req.body.description, req.body.address, req.body.maxGuests, 
        req.body.bedrooms, req.body.beds, req.body.bathrooms, 
        req.body.listed, req.body.featurePhoto, req.body.minStayLength,
        req.body.priceDaily, req.body.priceMonthly
    ]
    const insertResidenceQuery= `
    INSERT INTO "residences" 
    ("userId", "houseType", "propertyName", 
    "description", "address", "maxGuests", 
    "bedrooms", "beds", "bathrooms", 
    "listed", "featurePhoto", "minStayLength",
    "priceDaily", "priceMonthly")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
    `
    pool.query(insertResidenceQuery, sqlValues)
    .then(result => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error inserting property type', err);
        res.sendStatus(500);
    });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    let idToEdit = req.params.id;
    const sqlValues = [
        req.body.houseType, req.body.propertyName, 
        req.body.description, req.body.address, req.body.maxGuests, 
        req.body.bedrooms, req.body.beds, req.body.bathrooms, 
        req.body.listed, req.body.featurePhoto, req.body.minStayLength,
        req.body.priceDaily, req.body.priceMonthly, idToEdit
    ]
    const sqlQuery = `
    UPDATE "residences"
    SET
        "houseType" = $1,
        "propertyName" = $2,
        "description" = $3,
        "address" = $4,
        "maxGuests" = $5,
        "bedrooms" = $6,
        "beds" = $7,
        "bathrooms" = $8,
        "listed" = $9,
        "featurePhoto" = $10,
        "minStayLength" = $11,
        "priceDaily" = $12,
        "priceMonthly" = $13
    WHERE "id" = $14;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
        console.log('residence edit failed: ', err);
        res.sendStatus(500);
    });
})


module.exports = router;