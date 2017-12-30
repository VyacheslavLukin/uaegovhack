var request = require('request');
var async = require('async');

async
function requestToParity(faceId) {


    return new Promise(function (resolve, reject) {

        var options = {
            uri: 'http://authority0:8545',
            method: 'POST',
            json: {
                "jsonrpc": "2.0", "method": "parity_newAccountFromPhrase", "params": [faceId, faceId], "id": 0
            }
        };

        request(options, function (error, response, body) {
            console.log("error" + error + response + body);
            if (!error && response.statusCode == 200) {
                resolve(body)
            }
            else {
               reject(error)
            }
        });
    })
}


const parity = {
    requestToParity: requestToParity
};

module.exports = parity;