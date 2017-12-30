const bodyParser = require('body-parser')
const express = require('express')
const parity = require('./requestToParity');
const app = express()
const testData = require('./testDataTravels');
const testData1 = require('./testDataTravels1');
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
      console.log("oг tput"+Web3.utils.hexToString(result[i]));
      responcearray.push(Web3.utils.hexToString(result[i]))
    }
    res.send(responcearray)
  }
  catch (err) {
    console.log(err)
    res.send({"error":"-1"})
  }
})

app.get('/getTravels', async (req, res) => {
  try {
    if(req.query.passportHash == '0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8') res.send(testData.travels)
    if(req.query.passportHash == '0xzxcvbacp4ufxoxu0qtvaoo2oxoofvx61c46lssm0') res.send(testData1.travels)
    else { res.send({"error":"don't have data"}) }
  }
  catch (err) {
    console.log(err)
    res.send({"error":"500"})
  }
})

app.listen(port)
console.log('Service started on ' + port + ' port!')