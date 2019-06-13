const path = require("path");

module.exports = (app) => {
    // Get route that will serve the survey page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // Default catch all route that serves the home.html page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};