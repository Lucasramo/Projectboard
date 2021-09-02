
Meteor.startup(function(){

    Meteor.publish("form", function(){
        return Form.find({});
    })
})
