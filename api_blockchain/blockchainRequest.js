const Web3 = require('web3');
require('ethereum-web3-plus');
const config = require('./config.js');
const web3 = new Web3(Web3.givenProvider || config.ethereum.url);

var contract = new web3.eth.Contract(config.ethereum.interface, config.ethereum.addressContract);

async function createUser(faceid,hashPasport) {

   await web3.eth.personal.unlockAccount("0x439058c864a4242966ee10f608272e1a7fb598ec", "123", 10)
   return contract.methods.createUser(faceid, hashPasport).send({
     from: "0x439058c864a4242966ee10f608272e1a7fb598ec", gas: 1500000,
     gasPrice: '30000000000000'
   })
}

async function getHash(faceid) {

  await web3.eth.personal.unlockAccount("0x439058c864a4242966ee10f608272e1a7fb598ec", "123", 10)

  return contract.methods.getHash(faceid).call({
    from: "0x439058c864a4242966ee10f608272e1a7fb598ec",
  })
}

const ethereum = {
  createUser: createUser,
  getHash:getHash
};

module.exports = ethereum;