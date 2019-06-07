// Dependencies
let express = require("express");
let path = require("path");

//Bring in the API routes

//Bring in the HTML routes

// Create the App
let app = express();

// Set port, use the one already defined if it's there, this is required for Heroku deployment.
let PORT = process.env.PORT || 3000;




// Kick off the express server
app.listen(PORT, () => {
    console.log("Server is now listening at port: " + PORT);
});