const {UserModel} = require( './../models/userModel' );
const bcrypt = require( 'bcrypt' );


const UsersController = {


createNewUser: function ( req, res) {
    
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password


    console.log(firstname);
    if( firstname && lastname && email && password ){
        bcrypt.hash(password,10)
        .then(encryptedpass =>{
            newUser = {
                firstname,
                lastname,
                email,
                password : encryptedpass
            }
            UserModel
            .createUser(newUser)
            .then(data =>{
                userInfo = {
                    firstname : data.firstname,
                    lastname : data.lastname,
                    email : data.email
                }

                req.session.userInfo = userInfo
                res.status(200).json(data);
                //TODO: REVISAR SI ESTO DEBE IR EN SESION O QUE-----------------------------------------
            })
            .catch(err=>{
                res.status(404).json(err).end()
                console.log(err)
            })
        })
    }
    else{
        res.status( 406 ).end();
    }
},


login: function (req,res) {
    let email = req.body.email
    let password = req.body.password

    UserModel
    .getUserByEmail(email)
    .then(data =>{
        if(!data){
            throw new Error( "That user doesn't exist!" );
        }
        bcrypt.compare( password, data.password )
        .then(flag =>{
            if( !flag ){
                throw new Error( "Wrong password!" );
            }

            userInfo = {
            firstname : data.firstname,
            lastname : data.lastname,
            email : data.email
            }

        req.session.userInfo = userInfo
        res.status(200).json(userInfo);
        })
        .catch( error => {
            res.statusMessage = error.message;
            res.status(406).end()
        }); 
    })
    .catch( error => {
        res.statusMessage = error.message;
        res.status( 404 ).end();
        console.log(error);
    }); 
},

createNewUser2: function (req,res) {
    
},


}//*End of Controller



module.exports = { UsersController };