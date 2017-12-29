const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const ethereum = require('./blockchainRequest')
const port = process.env.PORT || 5000
const Web3 = require('web3');
require('ethereum-web3-plus');

app.use(bodyParser.json())


app.post('/createUser', async (req, res) => {
  let faceId = req.body.faceId
  let hashPassport = req.body.hashPassport
  try {
   let test =  ethereum.createUser(faceId, hashPassport);
   console.log(test);
    res.send({"result":true})
  }
  catch (err) {
    res.send({"error":"-1"})
  }
})

app.get('/getPassportHash', async (req, res) => {
  try {
    let result = await ethereum.getHash("asdad");
    console.log(result);
    for(var i=0;i<result.length;i++){
      console.log("uotput"+Web3.utils.hexToString(result[i]));
    }
    res.send({"result":true})
  }
  catch (err) {
    console.log(err)
    res.send({"error":"-1"})
  }
})
app.listen(port)
console.log('Service started on ' + port + ' port!')