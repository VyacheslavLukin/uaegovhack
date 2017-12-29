var request = require('request');

// var options = {
//   uri: 'http://localhost:8546',
//   method: 'POST',
//   json: {
//     "jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node0", "node0"],"id":0
//   }
// };
async function requestToParity (faceId) {


  return new Promise(function(resolve, reject) {

    var options = {
      uri: 'http://localhost:8546',
      method: 'POST',
      json: {
        "jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":[faceId, faceId],"id":0
      }
    };

    request(options, function (error, response, body) {
      console.log("error"+error+response+body)
      if (!error && response.statusCode == 200) {
        // console.log(body)
        resolve(body)
      }
    });
})}


const parity = {
  requestToParity: requestToParity
};

module.exports = parity;