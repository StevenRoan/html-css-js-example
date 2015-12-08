Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    Meteor.subscribe('tasks');
    //This part of code is in the client side
    Template.body.helpers({
        tasks: function () {
            if (Session.get("hideCompleted")) {
                // If hide completed is checked, filter tasks
                return Tasks.find({
                    checked: {
                        $ne: true
                    }
                }, {
                    sort: {
                        createdAt: -1
                    }
                });
            } else {
                // Otherwise, return all of the tasks
                return Tasks.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            }
        },
        hideCompleted: function () {
            return Session.get("hideCompleted");
        },
        incompleteCount: function () {
            return Tasks.find({
                checked: {
                    $ne: true
                }
            }).count();
        }
    });
    Template.task.helpers({
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
    });
    //Client send data to server by websocket
    Template.body.events({
        //wait for submit (event) of DOM belong to .new-task(CSS selector)
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;

            // Insert a task into the collection
            Meteor.call("addTask", text);

            // Clear form
            event.target.text.value = "";
        },
        "change .hide-completed input": function (event) {
            Session.set("hideCompleted", event.target.checked);
        }
    });
    Template.task.events({
        "click .toggle-checked": function () {
            // Set the checked property to the opposite of its current value
            Meteor.call("setChecked", this._id, !this.checked);
        },
        "click .delete": function () {
            Meteor.call("deleteTask", this._id);
        },
        "click .toggle-private": function () {
            Meteor.call("setPrivate", this._id, !this.private);
        }
    });
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}
Meteor.methods({
    addTask: function (text) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteTask: function (taskId) {
        var task = Tasks.findOne(taskId);
        if (task.private && task.owner !== Meteor.userId()) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error("not-authorized");
        }
        if (task.private && task.owner !== Meteor.userId()) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error("not-authorized");
        }
        Tasks.remove(taskId);
    },
    setChecked: function (taskId, setChecked) {
        var task = Tasks.findOne(taskId);
        if (task.private && task.owner !== Meteor.userId()) {
            // If the task is private, make sure only the owner can check it off
            throw new Meteor.Error("not-authorized");
        }

        Tasks.update(taskId, {
            $set: {
                checked: setChecked
            }
        });
    },
    setPrivate: function (taskId, setToPrivate) {
        console.log('in set private')
        var task = Tasks.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Tasks.update(taskId, {
            $set: {
                private: setToPrivate
            }
        });
    }
});

if (Meteor.isServer) {
    Meteor.publish("tasks", function () {
        console.log(this.userId)
        return Tasks.find({
            $or: [{
                private: {
                    $ne: true
                }
            }, {
                owner: this.userId
            }]
        });
    });
}