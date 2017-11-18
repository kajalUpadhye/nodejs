var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
        id: {
            type: String    
        },
        fName:{
            type: String    
        },
        lName: {
            type: String    
        },
        email: {
            type: String    
        },
        pinCode:{
            type: Number    
        },
        birthDate:{
            type: String    
        },
        isActive:{
            type: Boolean    
        }
});

module.exports = mongoose.model('User', userSchema);