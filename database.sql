
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "profile" (
	"userId" INT PRIMARY KEY REFERENCES "user"(id) ON DELETE CASCADE,
	"firstName" VARCHAR (80) NOT NULL,
	"lastName" VARCHAR (80) NOT NULL,
	"dob" DATE NOT NULL,
	"profession" VARCHAR (250),
    "viewAsRenter" BOOLEAN DEFAULT TRUE
	-- "photoURL" VARCHAR add later
);

CREATE TABLE "residences" (
	"id" SERIAL PRIMARY KEY,
	"userId" integer REFERENCES "user",
	"houseType" INT,
	"propertyName" VARCHAR (80),
	"description" VARCHAR (900),
	"address" VARCHAR (50),
	"maxGuests" INT,
	"bedrooms" INT,
	"beds" INT,
	"bathrooms" INT,
	"listed" BOOLEAN,
	"featurePhoto" VARCHAR,
	"minStayLength" INT,
	"priceDaily" INT,
	"priceMonthly" INT
);

CREATE TABLE "amenities" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255)
);

-- ameninities table population
INSERT INTO "amenities" 
	("name")
VALUES 
	('shower'),
	('bathtub'),
	('laundry'),
	('parking'),
	('pets'),
	('heating'),
	('fireplace'),
    ('ac'),
    ('wifi'),
    ('tv'),
    ('ev_charging');

-- amenities residences join table
CREATE TABLE "amenities_residences" (
    "id" SERIAL PRIMARY KEY,
    "amenitiesId" INT REFERENCES "amenities" ON DELETE CASCADE,
    "residenceId" INT REFERENCES "residences" ON DELETE CASCADE
);

--photos table
--create photo table
CREATE TABLE "photos" (
	"id" SERIAL PRIMARY KEY,
	"residenceId" INT REFERENCES "residences" ON DELETE CASCADE,
	"imagePath" VARCHAR
);

CREATE TABLE "instructions" (
	"residencesId" INT PRIMARY KEY REFERENCES "residences"(id) ON DELETE CASCADE,
	"wifiInformation" VARCHAR (50),
	"safetyProtocal" VARCHAR (100),
	"contactInformation" VARCHAR (50),
	"checkInDetails" VARCHAR (100),
    "checkOutDetails" VARCHAR (100)
);



