const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/all', rejectUnauthenticated, (req, res) => {
    console.log('GET /api/residences');
    const sqlQuery = 
    `
    SELECT * FROM "residences";
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        console.log('GET things failed:', dbErr);
        res.sendStatus(500);
    })
});


router.get('/:id', (req, res) =>{
    const residenceId = req.params.id
    const sqlValues = [residenceId]
    const sqlQuery = `SELECT * FROM "residences" WHERE "id" = $1;`;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log("ERROR in /api/residence GET route", error);
        res.sendStatus(500);
    });
})


router.post('/', rejectUnauthenticated, async (req, res) => {
    try{
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
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING "id";
        `
        const dbRes = await pool.query(insertResidenceQuery, sqlValues);
        console.log(dbRes.rows[0].id);
        res.send(dbRes.rows[0]).id;
    } catch (err) {
        console.log('error inserting property type', err);
        res.sendStatus(500);
    }
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
    let idToEdit = req.params.id;
    console.log(idToEdit);
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