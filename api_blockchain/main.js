const bodyParser = require('body-parser')
const express = require('express')
const parity = require('./requestToParity');
const app = express()
const ethereum = require('./blockchainRequest')
const port = process.env.PORT || 5050
const Web3 = require('web3');
require('ethereum-web3-plus');

app.use(bodyParser.json())



app.post('/createUser', async (req, res) => {

  try {
    let faceId = await req.body.faceId
    let hashPassport = await req.body.hashPassport
    let faceidFromParity = await parity.requestToParity(faceId);
    console.log("from Parity"+faceidFromParity.result)
    ethereum.createUser(faceidFromParity, hashPassport);

    res.send({"result":true})
  }
  catch (err) {
    res.send({"error":"-1"})
  }
})

app.get('/getPassportHash', async (req, res) => {
  try {

    console.log(req.query.faceId);
    let faceidFromParity = await parity.requestToParity(req.query.faceId);
    console.log("from Parity"+faceidFromParity.result)
    let result = await ethereum.getHash(faceidFromParity);
    let responcearray = [];
    for(var i=0;i<result.length;i++){
      console.log("uotput"+Web3.utils.hexToString(result[i]));
      responcearray.push(Web3.utils.hexToString(result[i]))
    }
    res.send(responcearray)
  }
  catch (err) {
    console.log(err)
    res.send({"error":"-1"})
  }
})
app.listen(port)
console.log('Service started on ' + port + ' port!')