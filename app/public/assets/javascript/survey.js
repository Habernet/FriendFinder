// When the user clicks the button we will save the inputs and use it to make an ajax put request to /api/friends

let yieldData = () => {
    // grab everything off the forms on the page
    // make sure the input is valid
    // build an object in the format of the objects that live in friends.js
    // return that object

    //Initialize the empty object (this will be posted)
    let user = {};
    // Grab the name and photo values
    user.name = $('#name').trim().val();
    user.photo = $('#photo').trim().val();
    // Create an empty array that will hold the user's scores
    user.scores = [];

    // Using jquery...loop through each of the forms on the page and yield their data...pushing it the the scores array
    $('.custom-select').each(function (index) {
        user.scores.push($(this).val());
    });

    // We have all of the data, now we will check to make sure it is valid for passing along
    // Check to make sure the user has entered the first two
    if (user.name === '' || user.photo === '') {
        return false;
    };
    // Check to make sure that none of the scores are 0
    for (let i = 0; i < user.scores.length; i++) {
        if (user.scores[i] === 0) {
            return false;
        };
    };

    // Return user object because the script made it this far, meaning it passed the checks and we have yielded the data/built our object
    return user;
};

$('body').on('click', '#submit', (e) => {
    e.preventDefault();
    // Store out user's object in a variable
    const user = yieldData();
    // If the user's data is valid...make the ajax call

    // Get the URL to send the ajax call , add the post route
    let url  = window.location.origin + '/api/friends'
    if (user) {
        // make the call with the object with your ajax call
        $.ajax({
            type: 'POST',
            url: url,
            data: user,
        }
        .done(function (res) {
            console.log(res);
            // the api will send a response... the best match
            // we will take that response, parse it out and place it in a modal on the page.

        })
        .fail(function (){
            alert("Failed to post your data! Please try again");
            console.log('Ajax call failed to post data');
        })
        );
    };
});