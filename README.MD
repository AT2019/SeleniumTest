## README
This project contains a basic Selenium + Mocha test suite. The intention of the project is to validate the login page functionality of the Uinsure website.

### Installation

 1. Clone this repo as normal
 2. ```npm install```

### Run Tests
Run the tests by executing:
``` npm test```

## The Task
This exercise is split in to two parts as described below. Any functionality relating to the registration form is outside of the scope of this exercise. Follow the existing conventions as closely as possible, and commit the work to a separate GitHub repo which can be viewed publicly. Commit often and with descriptive commit messages so that your progress is clear.

**Do not commit any user credentials to the repository!** (These will be shared with you via email).

### Part 1 
The aim of this exercise is to add additional tests for the functionality of the login page. Some tests have been added a starting point, one of which should be failing.

Things to do:
 - Implement the failing test
 - Add tests for all validation messages / error cases
 - Add tests for all login page functionality e.g. clicking "back", or "forgot password"
 

### Part 2
Now that the login page is fully covered by an automated test suite, implement an additional set of tests for the "Reset your password" functionality.
This should include:

 - An additional resetPasswordPage.spec.js file under the \test folder
 - An additional resetPasswordPage.js file under the \pageObjects folder
 - All of the tests/functionality that you think appropriate to test

