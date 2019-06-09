// Dependencies
let express = require("express");
let path = require("path");

// Create the App
let app = express();

// Require the routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Set port, use the one already defined if it's there, this is required for Heroku deployment.
let PORT = process.env.PORT || 3000;

//enable serving of static files css, js, images

// Kick off the express server
app.listen(PORT, () => {
    console.log("Server is now listening at port: " + PORT);
});