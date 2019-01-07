var keystone = require('keystone');

User.model.findOne({ email: email}, function(findError, user) {
if (findError) {
     print("error") 
} else {
     user.password = "sy4/yoshinon";
     user.save(function(saveError) {
     if (saveError) {
         print("error");
     }
});
}
});
