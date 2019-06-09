// Dependencies
let friends = require("./data/friends");

module.exports = (app) => {
    // Bring in this middleware to deal with post requests
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    // GET route for /api/friends
    app.get('api/friends'), (req, res) => {
        return res.json(friends.friends);
        // We will send a response containing the JSON data stored in our friends.js
    });

    // POST route for /api/friends used to handle incoming survey resuls, also handles compatibility logic
    app.post('/api/friends') , (req, res) => {
        // Capture the req.body
        let friend = req.body;
        console.log(friend);
        // Do some logic to determine which friend is most compatible, send it back in the res.body
        // To do this logic you will have to bring in the entire array from friends and compare with a function...the function should return the best match and then we send that in a res.body
        // The client side will then take that data and parse it to a modal per the instructions.

    });
};