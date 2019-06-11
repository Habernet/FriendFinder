// Dependencies
let friends = require("../data/friends");
let bodyParser = require("body-parser");


module.exports = (app) => {
    // Bring in this middleware to deal with post requests
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // GET route for /api/friends
    app.get('/api/friends', (req, res) => {
        res.json(friends);
        // We will send a response containing the JSON data stored in our friends.js
    });

    // POST route for /api/friends used to handle incoming survey resuls, also handles compatibility logic
    app.post('/api/friends', (req, res) => {
        // Capture the req.body
        let user = req.body;
        // console.log(user);
        // console.log(friends);
        // Do some logic to determine which friend is most compatible, send it back in the res.body


        // We get back an array of objects from friends.js
        // We don't care about the other parts of the objects...just the scores.

        // Get the scores of the user, create an array to hold all of the friends scores.
        let userScores = user.scores,
            scores = [];

        // For every question in the user scores..compare it to each friend's corresponding answer.
        // Loop over the friends array to do this.
        friends.forEach(function (scores) {
            // Get the absolute value difference of each answer and add it to a total

            // Push each totaldifference value (represents the total difference of each friend)
            // to the scores array. Now we have an array of values that shows how different the scores were 

            // Send the user's data to the database


        });



        friends.push(user);

        // Find the smallest value in the total difference array, get the index of it..
        // using the index of ...respond with the json of that element.
        // This is returning the best match.


        res.send(user);

    });
};