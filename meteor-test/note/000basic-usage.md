# Basic Usage of Meteor
### Command Line
* `meteor create <project name>`
 * `cd <project folder>`
 * `meteor`: to launch the app
 * `meteor add accounts-ui accounts-password` to include login related ui
 * `meteor remove inscure`: remove inscure method to prevent from modifying server data directly
 * `meteor remove autopublish`: Server has to explicitly set the data

### Specialty
* [optimistic ui](https://www.meteor.com/tutorials/blaze/security-with-methods#optimisticui): 
 * Looks the app like realtime (No round trip time)
 * achieved by adding method in server and execute in client side.
