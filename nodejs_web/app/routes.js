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




   app.post('/users', function(req, res){

     var modifiedUrl = 'http://localhost:5050/getTravels?passportHash='+req.body.passportHash;
     console.log("BlockChain URL",modifiedUrl);

       request.get({url:modifiedUrl
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

     app.post('/analyseUser', function(req, res){

       var modifiedUrl = 'http://localhost:5501/analytics?user='+req.body.user;
       console.log("Analysis URL",modifiedUrl);
         request.get({url:modifiedUrl
         }, function optionalCallback(err, httpResponse, body) {
           if (err) {
              console.log('Analysis failed:', err);
              res.json(err);
           }
           else{
             console.log('Analysis successful!  Server responded with:', body);
             res.json(body);
           }
       });
       });
};
