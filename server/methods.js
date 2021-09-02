Meteor.methods({
    add : function(obj){
        Form.insert({
            description: obj.description,
            date: obj.date,
            userLog: obj.userLog
        })
    }
})