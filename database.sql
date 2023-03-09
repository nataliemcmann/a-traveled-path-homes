
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "residences" (
	"id" SERIAL PRIMARY KEY,
	"userId" integer REFERENCES "user",
	"houseType" INT,
	"propertyName" VARCHAR (80),
	"description" VARCHAR (250),
	"address" VARCHAR (50),
	"maxGuests" INT,
	"bedrooms" INT,
	"beds" INT,
	"bathrooms" INT,
	"listed" BOOLEAN,
	"featurePhoto" VARCHAR
);

CREATE TABLE "amenities" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255)
);

CREATE TABLE "amenities_residences" (
    "id" SERIAL PRIMARY KEY,
    "amenitiesId" INT,
    "residenceId" INT
);