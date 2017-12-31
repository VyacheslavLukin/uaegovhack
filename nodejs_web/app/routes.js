// Dependencies
var mongoose        = require('mongoose');
var User            = require('./model.js');
var request         = require('request');
var base64         = require('base64url');
var fs         = require('fs-extra');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.post('/userInfo', function(req, res){

        // // Uses Mongoose schema to run the search (empty conditions)
        // var query = User.find({username:req.body.username});
        // query.exec(function(err, users){
        //     if(err) {
        //         res.send(err);
        //     } else {
        //         // If no errors are found, it responds with a JSON of all users
        //         res.json(users);
        //     }
        // });

        console.log("*** File ",req.body.file)
        var file1 = base64.decode(req.body.file);
        console.log("*** After File ",file1);

        var formData = {
          file: fs.createReadStream(file1),
          options: {
            filename: 'topsecret.jpg',
            contentType: 'image/jpeg'
          }
        }
        request.post({url:'http://localhost:5001/get_face_id', formData:
        {
          file: fs.createReadStream(file1),
          options: {
            filename: 'topsecret.jpg',
            contentType: 'image/jpeg'
          }
        }}, function optionalCallback(err, httpResponse, body) {
          if (err) {
            return console.error('upload failed:', err);
          }
        console.log('Upload successful!  Server responded with:', body);
      });
    });




    // POST Routes
   // --------------------------------------------------------
   // Provides method for saving new users in the db
   app.post('/users', function(req, res){

       // Creates a new User based on the Mongoose schema and the post bo.dy

       request.get({url:'http://localhost:5050/getTravels?passportHash=0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8'
       }, function optionalCallback(err, httpResponse, body) {
         if (err) {
            console.log('upload failed:', err);
            res.json(err);
         }
         else{
           console.log('Upload successful!  Server responded with:', body);
           res.json(body);
         }
     });
     });

       // var newuser = new User(req.body);
       // console.log("New User",newuser);
       //
       // // New User is saved in the db.
       // newuser.save(function(err){
       //     if(err)
       //         res.send(err);
       //     else
       //         // If no errors are found, it responds with a JSON of the new user
       //         res.json(req.body);
       // });
};
