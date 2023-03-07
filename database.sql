
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
	"photoURL" VARCHAR
);