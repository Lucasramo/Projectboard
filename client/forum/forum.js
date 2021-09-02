Template.forum.events({
    "click #btnform": function (e) {
        e.preventDefault();

        // Taking submitted amounts
        let form = $("#text_description").val();
        let date = moment(new Date()).format('MM/DD/YYYY');

        // Adding in Mongo
        Meteor.call("add", {
            description: form,
            date: date,
            userLog: Meteor.user().username
        })
        // clearing the filled field
        $("#text_description").val("")
    },
    "click #remove": function (e) {
        e.preventDefault();
        let Removeform = this

        // If you confirm the deletion of the comment, it will be removed from Mongo
        let confirmation = confirm("Do you really want to remove this comment?")
        if (confirmation) {
            Form.remove({ _id: Removeform._id })
        }
    }
})
Template.forum.helpers({
    // Helpers listing all comments
    forms: function () {
        let form = Form.find().fetch()
        return form
    }
})
// Add username to login
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});