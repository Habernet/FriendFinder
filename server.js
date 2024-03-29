// Dependencies
let express = require("express");
let path = require("path");

// Create the App
let app = express();
// Set port, use the one already defined if it's there, this is required for Heroku deployment.
let PORT = process.env.PORT || 3000;

// Middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Allows for serving of static files hosted in the public folder THIS HAS TO COME BEFORE THE ROUTE DECLARATIONS
app.use(express.static(path.join(__dirname, "./app/public")));

// Require the routes since we only need to define the routes in the other file..we don't need to store this in a variable, we can just pass it our instance of express.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Kick off the express server
app.listen(PORT, () => {
    console.log("Server is now listening at port: " + PORT);
});