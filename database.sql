
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
	"description" VARCHAR (250),
	"address" VARCHAR (50),
	"maxGuests" INT,
	"bedrooms" INT,
	"beds" INT,
	"bathrooms" INT,
	"listed" BOOLEAN,
	"featurePhoto" INT,
	"minStayLength" INT,
	"priceDaily" INT,
	"priceMonthly" INT
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

----------------ForDummyData-------------------

CREATE TABLE "property" (
	"id" SERIAL PRIMARY KEY,
	"houseType" INT,
	"propertyName" VARCHAR (80),
	"description" VARCHAR (250),
	"featurePhoto" VARCHAR
);

CREATE TABLE "instructions" (
	"residencesId" INT PRIMARY KEY REFERENCES "residences"(id) ON DELETE CASCADE,
	"wifiInformation" VARCHAR (50),
	"safetyProtocal" VARCHAR (100),
	"contactInformation" VARCHAR (50),
	"checkInDetails" VARCHAR (100),
    "checkOutDetails" VARCHAR (100)
);

 SELECT
        "residences"."id",
        "instructions"."wifiInformation",
        "instructions"."safetyProtocal",
        "instructions"."contactInformation",
        "instructions"."checkInDetails",
        "instructions"."checkOutDetails"
      FROM "residences"
      LEFT JOIN "instructions"
        ON "residences"."id" = "instructions"."residencesId"