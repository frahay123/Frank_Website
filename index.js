// Your JavaScript code goes here

function onSignIn(googleUser) {
    // This function is called when the user signs in successfully
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do something with the user's ID
    console.log('Name: ' + profile.getName()); // Do something with the user's name
    console.log('Email: ' + profile.getEmail()); // Do something with the user's email
  }
