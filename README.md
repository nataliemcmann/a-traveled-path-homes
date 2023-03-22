A Traveled Path Homes

Description
'A Traveled Path Homes' is a two sided marketplace application for traveling medical professionals to find long term housing close to their workplace. A user can log in as a renter, or a property owner to rent out their home. Houses can be booked by renters, and property owners can list and unlist their properties whenver necessary. This was developed to be used internally by 'A Traveled Path Homes' founder and technical team. 

Built With
HTML, CSS, Javascript, React, Redux-Saga, PostgreSQL, Figma, MaterialUI, Node.js      

Getting Started
This project should be able to run in your favorite IDE. I used VS code while building it. 

Prerequisites
Before you get started, make sure you have the following software installed on your computer:
Node.js

Installation
1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type... git clone {paste SSH link}
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run npm install to install all dependencies
7. Create a .env file at the root of the project and paste this line into the file:
8. Create a database named atph-database in PostgresSQL If you would like to name your database something else, you will need to change atph-database to the name of your new database name in server/modules/pool.js
9. The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. If this is going to production, leave out the dummy data.
10. Run npm run server in your VS Code terminal
11. Open a second terminal and run npm run client

Usage
Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

Video walkthrough of application usage: link here

Deployment
Login Credentials for Heroku have been provided in the hand off document.

Environment variables are kept on Heroku in the Settings tab, just click the Reveal Config Vars button

To set up the DB, we used Postico, just plug the information from Heroku into a new favorite. The Information for this can be found in the Resources tab, by clicking the Postgres add on. From there it will bring you to a new page where you will go into the settings tab and click view credentials.

If you'd like to create new users (also a hacky way to change password) you must:

Go into the user router
Uncomment the route
Push changes and redeploy app
Register User
Comment out the route back in VSCode
Push changes
Redeploy

