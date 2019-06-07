// Dependencies
let path = require("path");


// Bring in this middleware to deal with post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


module.exports = (app) => {
    // GET route for /api/friends
    app.get('/api/friends', (req, res) => {
        // res.send
        // We will send a response containing the JSON data stored in our friends.js
    });

    // POST route for /api/friends used to handle incoming survey resuls, also handles compatibility logic
    app.post('/api/friends', (req, res) => {
        // Capture the req.body and use it to update our friends.js (where our data lives)
        // Do some logic to determine which friend is most compatible, send it back in the res.body
    });
};