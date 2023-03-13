const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')



router.post('/', rejectUnauthenticated, async (req, res) => {
    try {
        const amenitiesList = req.body.amenitiesList;
        const residenceId = req.body. residenceId;
        const sqlQuery = `
            INSERT INTO "amenities_residences"
                ("amenitiesId", "residenceId")
            VALUES
                ($1, $2);
            `;
        await Promise.all(amenitiesList.map((amenity) => {
            const sqlValues = [amenity, residenceId];
            pool.query(sqlQuery, sqlValues);
            })
        )
        console.log('post successful');
        res.sendStatus(201);
    } catch (err) {
        console.log('amenities-residences post failded', err);
        res.sendStatus(500);
    }
})

module.exports = router;