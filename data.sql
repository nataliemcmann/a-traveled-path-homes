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
VALUES(1,3,'Vibrant neighborhood', 'Located in Crossroads Arts District, City Club Apartments is the first to deliver true apartment hotel experiential living to Kansas City. Residents enjoy quick access to major employers like Truman Medical Center and also exciting attractions such as the nearby Sprint Center. ', '1125 Grand Blvd, Kansas City, MO 64106',
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



------------Adding-FeaturePhotos--------------

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/Rectangle+21+(1).png'
      WHERE "id" = 1;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/Rectangle+21.png'
      WHERE "id" = 2;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/House+2/house+2-1.webp'
      WHERE "id" = 3;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/House+6/house+6-1.webp'
      WHERE "id" = 4;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/House+4/house+4-1.webp'
      WHERE "id" = 5;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/House+1/house+1.webp'
      WHERE "id" = 6;

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/Rectangle+21+(3).png'
      WHERE "id" = 7;     

UPDATE "residences"
      SET "featurePhoto" = 'https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/DummyHouses/Rectangle+21+(2).png'
      WHERE "id" = 8;



INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")
  
VALUES
(1,1, 'First Family', 'Immediate Possession on the one level home thats 2 blocks to trolly trail.  Big Kitchen ! Updated Master bath with extra deep tub.Hardwood flors throughout.  Big patio views LARGE fensed yard with planting boxes ready for your vegetables!', '8112 Walnut St, Kansas City, MO 64114',5,3,3,2,30,45,1350);


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")

VALUES
(1,1, 'Ranch house', '1. Beautifully remodeled ranch home with attached garage. Permits were pulled for all the work done by this seller! New Kitchen including flooring, cabinets, countertop. New flooring throughout. New, reconfigured bathroom on the main level.
', '4803 N Wheeling Ave, Kansas City, MO 64119', 6,4,4,3,30,55, 1650);


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
 "maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
  "priceDaily", "priceMonthly")

VALUES
(1,1, 'Split entry', 'New carpet is just one of the many desirable features you will find in this 3 bedroom/3 bath home that is move-in ready!  Situated on a quiet street in North Kansas City, near Claycomo, this home has fresh interior paint, andfresh exterior paint.', '5738 NE Barnes Ave, Kansas City, MO 64119', 3,3,2,2,30,40, 1250);


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,1, 'Cozy cove',' Take a look at this stunning 3 bedroom, 2 bath home, minutes from Waldo, Brookside and Ward Parkway shops and restaurants! This home is located on a culdesac and features an abundance of space in the kitchen, and the two separate living room spaces.', '5515 E 89th Ter, Kansas City, MO 64131', 3,4,2,2,30,35, 1100);

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2, 'whispering Lake',' the apartment you have been looking for in Kansas City, MO. With comfortable one- and two-bedroom homes complete with washers and dryers, private patios, and walk-in closets, you are guaranteed to find a place to live with a lifestyle to love. ', '10415 E 43rd St, Kansas City, MO 64133', 3,2,2,2,30,30,900);

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,5,'Futuristic', 'Stunning townhome in Robincest Village just off Barry Rd. This 2 bedroom. 2.1 bath home has an open floorplan and tall vaulted ceilings. The kitchen has been completely remodeled! The living room features a cozy fireplace to relax', '3626 NW 85th St, Kansas City, MO 64154',2,2,2,2,30,32,960); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Bamboo house', 'Amazing 2 story in Highridge Manor! Bamboo floors greet you at the front door and extend through the living room. Modern kitchen features, newer appliances, and granite countertops. Second level has 4 bedrooms and 2 full baths.', '1125 Grand Blvd, Kansas City, MO 64106',6,4,4,2,30,54,1600); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Ranch-Style', 'Almost NEW Reversed Ranch-style home with an open floor plan. The main level features hardwood floors throughout the entire main level, including a great room with soaring ceilings, lots of windows, and a fireplace.', '1125 Grand Blvd, Kansas City, MO 64106',6,4,4,3,30,66,2000); 


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'NEW PRICE', 'Located in the beloved Hyde Park neighborhood, this beautiful 3 bed, 2.5 bath home is totally restored with modern flare and designs inspired by the homes original features! Close proximity to Country Club Plaza, Westport, UMKC and Hospital Hill.','4152 Harrison St, Kansas City, MO 64110',5,3,3,4,30,36,1100); 


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Trolley Track', 'This Armour Hills home has nearly a century of stories to tell while being well-maintained and updated for modern comfort, convenience and efficiency. Newer walkway with front patio to enjoy the lush yard and sweeping views of the Trolley Track.','6701 Brookside Rd, Kansas City, MO 64113',5,3,3,4,30,30,920); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Open Airy', 'They say a photo is worth a thousand words, why settle for a photo when you can have the stunning views of the Plaza for all seasons in this stunning 2 bedroom 2 bath corner unit located in Parkway Towers.','4545 Wornall Rd APT 111, Kansas City, MO 64111',4,2,2,2,30,50,1500); 


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Weather House', 'WOW! Gorgeous side/side split in South Kansas City. The home has been fully remodeled and is move in ready. You will love the open and spacious floor plan, all new kitchen with stainless steel appliances, quartz counters, subway tile back splash.','42 E 106th St, Kansas City, MO 64114',4,3,3,3,30,60,1800); 


INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Spaceshop', 'WOW! Gorgeous side/side split in South Kansas City. The home has been fully remodeled and is move in ready. You will love the open and spacious floor plan, all new kitchen with stainless steel appliances, quartz counters, subway tile back splash.','7217 Terrace St, Kansas City, MO 64114',4,3,3,3,30,60,1800); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Peaky Blinders', 'You will be welcomed into a character-filled interior which is flooded with light and merges a separate dining room, home office, good-sized living room, generous living spaces and brick fireplace. ','4129 Agnes Ave, Kansas City, MO 64130',4,3,3,1,30,41,1230); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Waldo House', 'close to shops, restaurants, hardware stores, schools, etc!!! This Dutch Colonial is a TRUE 4 BEDROOM HOME! Hardwood floors & today is paint colors thruout. Kitchen boasts granite countertops, stainless steel appliances ','7215 Washington St, Kansas City, MO 64114',6,4,4,2,30,48,1460); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Vacuum House', 'Beautiful updated home in historic Northeast! Updates include kitchen, bathrooms and main level laundry as well as plumbing, electric and thermal windows. Hardwood flooring throughout.','339 Indiana Ave, Kansas City, MO 64124',6,4,4,2,30,35,1050); 

INSERT INTO "residences" 
("userId","houseType", "propertyName", "description", "address",
"maxGuests", "bedrooms", "beds", "bathrooms", "minStayLength",
"priceDaily", "priceMonthly")

VALUES
(1,2,'Vacuum House', 'Beautiful updated home in historic Northeast! Updates include kitchen, bathrooms and main level laundry as well as plumbing, electric and thermal windows. Hardwood flooring throughout.','339 Indiana Ave, Kansas City, MO 64124',6,4,4,2,30,35,1050); 
