// Dependencies
let friends = require("../data/friends");
let bodyParser = require("body-parser");


module.exports = (app) => {

    // GET route for /api/friends
    app.get('/api/friends', (req, res) => {
        // Return the json of the whole friends array.
        res.json(friends);
    });

    // POST route for /api/friends used to handle incoming survey resuls, also handles compatibility logic
    app.post('/api/friends', (req, res) => {
        // Capture the req.body
        let user = req.body;

        // We get back an array of objects from friends.js
        // We don't care about the other parts of the objects...just the scores.
        // Get the scores of the user, create an array to hold all of the friends total differences.
        let userScores = user.scores,
            differenceScores = [];

        console.log(userScores);

        // For every question in the user scores..compare it to each friend's corresponding answer.
        // Push the difference to scores array. Because you are going through the arrays in this matter..the position of each total difference corresponds with the position of the friend who it represents.

        // For every friend...
        friends.forEach(function (element) {
            // Here is the total difference for a given character, it has to stay here in the outer loop
            let totalDifference = 0;

            // For every friend...compare each userscore to the current friend's score
            userScores.forEach(function (score, index) {
                // Bring in the friend's corresponding score
                score = Number(score);
                let friendScore = Number(element.scores[index]);
                console.log('Friends ' + friendScore);
                // Get the difference in scores
                totalDifference += score - friendScore;
                console.log('Total ' + totalDifference);
            });

            // Push the total difference (in absolute value form) to the differenceScores array
            differenceScores.push(Math.abs(totalDifference));
            console.log ('THIS FRIEND: ' + totalDifference);
            console.log('\n' + '------------------------------------------------------------')
        });



        // Send the user's data to the database
        friends.push(user);

        // We can now find the minimum value...meaning the total score difference that was the smallest and therefore the closets match,
        // and we can use that index to index into the friends array and retrieve the object that represents the best match.

        // Find the min value of the scores array
        // Using the min value...find the index of it in the array
        let bestIndex = differenceScores.indexOf(Math.min.apply(null, differenceScores));

        // Using that index... index into the best friends and return the json to the front end
        res.json(friends[bestIndex]);
    });
};