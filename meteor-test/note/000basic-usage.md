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

### Pure Meteor
#### .html
* `{{syntax}}`: logic or embed.
 * `{{>task}}`: Embed template `task`.
 * Example: `{{#each tasks}}`...`{{/each}}: iterate all the result of helper function `tasks`. `tasks` needs to return an array.
 * Example: `{{#if isOwner}}...{{/if}}: : if else. helper function, `isOwner` must return bool.

#### .js
* Template
 * Template.body.helper: The js method that can be accesed in DOM <body> (of the html that will be preprocessed by meteor);
 * Template.task.helper: Similiar as above, but can be accessed in `<template name='task'>`
 * Template.task.event: set CSS selector and related event
* Session
 * `Session` keeps global state of this page

# Publish annd subscribe