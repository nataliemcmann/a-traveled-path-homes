INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")
VALUES 
(1,1, 'Red House','You will love this bright & colorful house in the heart of Uptown! This comfy 4 bed 3 bath is walking distance to tons of attractions, including cafes, restaurants, bars, parks, theaters, bowling, Lake Bde Maka Ska, Lake of the Isles, 1.5 miles from downtown',
'1235 W 57th Ter, Kansas City, MO 64113', 6,4,4,3,30,50,1500); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")
VALUES
 (1,5,'Futuristic', 'From the unparalleled white-glove services to the prime placement in one of Kansas City most walkable neighborhoods, this sublime residence offers the ultimate in high-rise luxury living.', '400 W 49th Ter APT 2094, Kansas City, MO 64112',
  10, 2,2,2,30,70,2100); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address", 
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength", 
"priceDaily", "priceMonthly")
VALUES
(1,2,'Spacious Multi-Family Unit', 'The Grand is new-age luxury at its finest. The 21-story tower of our downtown Kansas City apartments offers extensive amenities and high-tech features paired with an unbeatable location in the heart of the city.', '1125 Grand Blvd, Kansas City, MO 64106',
 6,2,2,2,30,63, 1895); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")
VALUES 
(1,3,'High Tech', 'Sophisticated City living on the Plaza! Hardwoods throughout ,updated lighting, brand new HVAC & Master bedroom window, see-through fireplace-(entertain from hearth to outdoor patio), 4 outdoor deck/patio areas, Amazing personal roof top deck w/hot tub(newly refurbished) & lounge area (Stunning Views), Open kitchen/hearth rm w/wine fridge.', '4450 J C Nichols Pkwy, Kansas City, MO 64111',
 8,4,4,4,30,113,3400);

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength", 
 "priceDaily", "priceMonthly")
VALUES
 (1,1,'Historical', 'This beautiful 3-story home has incredible charm with modern updates throughout while still giving a nod to its historical roots. The home has 3 bedrooms on the 2nd floor with newer carpet, hardwoods throughout the main level, & original hardwoods on the fully finished and open 3rd floor', '400 W 49th Ter APT 2094, Kansas City, MO 64112',
10, 4,2,2,30,80,2400); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength", 
"priceDaily", "priceMonthly")
VALUES
(1,4,'Studio', 'This beautiful 1 story apartment has incredible charm with modern updates throughout while still giving a nod to its historical roots. The home has 3 bedrooms on the 2nd floor with newer carpet, hardwoods throughout the main level, & original hardwoods on the fully finished and open 3rd floor', '400 W 49th Ter APT 2094, Kansas City, MO 64112',
 5, 1,1,1,30,35,1050); 

 INSERT INTO "residences"
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength", 
"priceDaily", "priceMonthly")
VALUES(1,3,'Vibriant neighborhood', 'Located in Crossroads Arts District, City Club Apartments is the first to deliver true apartment hotel experiential living to Kansas City. Residents enjoy quick access to major employers like Truman Medical Center and also exciting attractions such as the nearby Sprint Center. ', '1125 Grand Blvd, Kansas City, MO 64106',
4,2,2,2,30,63, 1895); 

INSERT INTO "residences"
("userId","houseType", "propertyName", "description", "address", 
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength", 
"priceDaily", "priceMonthly")
VALUES(1,2,'Lake Front', 'Beautiful town home located in an ideal location near shopping and highway in KC now available!! This spacious 3 bedroom/3 bath has two balconies overlooking a lake, beautiful living spaces, large bedrooms, a true master bedroom and a large two car garage!', '1125 Grand Blvd, Kansas City, MO 64106',
 9,3,4,2,30,63, 1895); 


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