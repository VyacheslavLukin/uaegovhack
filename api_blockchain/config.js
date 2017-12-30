module.exports = {
    db: {
        'url': 'mongodb://mongo/innosoftUsers'
    },
    ethereum: {
        passphrase: '',
        //url: 'https://rinkeby.infura.io/gn3FL6AeF2Lr0rgK82FM',
        url: 'http://authority0:8545',

        bytecode: '60606040526040805190810160405280600981526020017f43796265724b6f696e00000000000000000000000000000000000000000000008152506002908051906020019062000051929190620000b5565b5034156200005e57600080fd5b5b612710600081905550600054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b62000164565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000f857805160ff191683800117855562000129565b8280016001018555821562000129579182015b82811115620001285782518255916020019190600101906200010b565b5b5090506200013891906200013c565b5090565b6200016191905b808211156200015d57600081600090555060010162000143565b5090565b90565b61120380620001746000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a7578063095ea7b31461013657806318160ddd1461019057806323b872dd146101b9578063661884631461023257806370a082311461028c57806395d89b41146102d9578063a9059cbb14610368578063d73dd623146103c2578063dd62ed3e1461041c575b600080fd5b34156100b257600080fd5b6100ba610488565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fb5780820151818401525b6020810190506100df565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014157600080fd5b610176600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610526565b604051808215151515815260200191505060405180910390f35b341561019b57600080fd5b6101a3610619565b6040518082815260200191505060405180910390f35b34156101c457600080fd5b610218600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061061f565b604051808215151515815260200191505060405180910390f35b341561023d57600080fd5b610272600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109df565b604051808215151515815260200191505060405180910390f35b341561029757600080fd5b6102c3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c71565b6040518082815260200191505060405180910390f35b34156102e457600080fd5b6102ec610cbb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561032d5780820151818401525b602081019050610311565b50505050905090810190601f16801561035a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561037357600080fd5b6103a8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610cf4565b604051808215151515815260200191505060405180910390f35b34156103cd57600080fd5b610402600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f19565b604051808215151515815260200191505060405180910390f35b341561042757600080fd5b610472600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611116565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b505050505081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561065c57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106aa57600080fd5b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561073557600080fd5b61078782600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119e90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061081c82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111b890919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108ee82600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119e90919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b9392505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610af0576000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b84565b610b03838261119e90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505b5092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b6040805190810160405280600581526020017f43436f696e00000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d3157600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610d7f57600080fd5b610dd182600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119e90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e6682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111b890919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b6000610faa82600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111b890919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600190505b92915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b92915050565b60008282111515156111ac57fe5b81830390505b92915050565b60008082840190508381101515156111cc57fe5b8091505b50929150505600a165627a7a723058200ed22978d07efa15849b3d3597d2886a7f647442ae129130dfaec85a91e899470029',
        interface: [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_hashPasport",
                        "type": "string"
                    }
                ],
                "name": "getTravelbyHash",
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "timshtamp",
                                "type": "uint256"
                            },
                            {
                                "name": "faceid",
                                "type": "address"
                            },
                            {
                                "name": "to",
                                "type": "string"
                            },
                            {
                                "name": "from",
                                "type": "string"
                            },
                            {
                                "name": "aim",
                                "type": "string"
                            },
                            {
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "name": "hashPasport",
                                "type": "string"
                            }
                        ],
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_faceId",
                        "type": "address"
                    }
                ],
                "name": "getHash",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_timeshtamp",
                        "type": "uint256"
                    },
                    {
                        "name": "_faceId",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "string"
                    },
                    {
                        "name": "_from",
                        "type": "string"
                    },
                    {
                        "name": "_aim",
                        "type": "string"
                    },
                    {
                        "name": "_description",
                        "type": "string"
                    },
                    {
                        "name": "_hashPasport",
                        "type": "string"
                    }
                ],
                "name": "createTravel",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_faceId",
                        "type": "address"
                    },
                    {
                        "name": "_hashPasport",
                        "type": "string"
                    }
                ],
                "name": "createUser",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    }
}