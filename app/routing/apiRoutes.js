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

        // We get back an array of objects from friends.js
        // We don't care about the other parts of the objects...just the scores.

        // Get the scores of the user, create an array to hold all of the friends scores.
        let userScores = user.scores,
            scores = [];

        // For every question in the user scores..compare it to each friend's corresponding answer.
        // Use two for each's here.
        // You will push the difference to scores array. Because you are going through the arrays in this matter..the positions in the array correspond with the actual total difference of each friend.


        // For every friend...
        friends.forEach(function (element) {
            // Get the difference of each answer and add it to a total
            // Here is the total, it has to stay here in the outer loop
            let totalDifference = 0;

            // For every friend...compare each userscore to the current friend's score
            userScores.forEach(function (score) {
                // Bring in the friend's corresponding score
                let friendScore = element.scores[score];
                // Get the difference in scores
                totalDifference += score - friendScore;
            });

            scores.push(Math.abs(totalDifference));
        });



        // Send the user's data to the database
        friends.push(user);

        // Because the scores array corresponds in position to the friends array...their scores match up.
        // We can now find the minimum value...meaning the total score difference was the least (best match),
        // and we can use that index to index into the friends array and retrieve YOUR BEST FRAN.

        // Find the min value of the scores array
        // Using the min value...find the index of it in the array
        let bestIndex = scores.indexOf(Math.min.apply(null, scores));
    
        // Using that index... index into the best friends and return the json to the front end
        res.json(friends[bestIndex]);

    });
};