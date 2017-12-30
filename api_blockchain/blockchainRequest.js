fs = require('fs');
var async = require('async');
var await = require('await');
const Web3 = require('web3');
require('ethereum-web3-plus');
const config = require('./config.js');
const web3 = new Web3(Web3.givenProvider || config.ethereum.url);

var contract = new web3.eth.Contract(config.ethereum.interface, fs.readFile("contract_address/contract_address.txt"));
var main_account = "0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B";

async
function createUser(faceid, hashPasport) {

    await
    web3.eth.personal.unlockAccount(main_account, "", 10)
    return contract.methods.createUser(faceid, hashPasport).send({
        from: main_account, gas: 1500000,
        gasPrice: '30000000000000'
    })
}

async
function getHash(faceid) {

    await
    web3.eth.personal.unlockAccount(main_account, "", 10)

    return contract.methods.getHash(faceid).call({
        from: main_account,
    })
}

const ethereum = {
    createUser: createUser,
    getHash: getHash
};

module.exports = ethereum;