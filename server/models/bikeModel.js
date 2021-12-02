//* REQUIRES
const mongoose = require('mongoose');


//*----------------CONSTRUCTOR-------------------------------------------------------------------------------------
const BikeSchema = new mongoose.Schema({

    title :{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    description : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 200
    },

    price : {
        type : Number,
        required : true,
        unique : true
    },

    location : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    creator : {
        type : String,
        required : true
    },

});
//*----------------CONSTRUCTOR END----------------------------------------------------------------------------------

//*CONNECT COLLECTION
const User = mongoose.model( 'bikes', BikeSchema );


//*----------------QUERYS------------------------------------------------------------------------------------------

//?----------------(QUERYS FOR USERS)----------------------------
const UserModel = {

    //TODO INSERT MORE QUERYS

}

//*----------------QUERYS END--------------------------------------------------------------------------------------

//* EXPORT MODEL (QUERY OBJECTS)
module.exports = {UserModel};