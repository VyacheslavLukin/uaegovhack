from web3 import Web3, HTTPProvider
from solc import compile_source
from web3.contract import ConciseContract
from random import choice
import time

main_account = "0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B"

filename = 'SmartFace.sol'
with open(filename, 'r') as fh:
    smart_face_src = fh.read()


compiled_sol = compile_source(smart_face_src)
contract_interface = compiled_sol['<stdin>:DubaiSmartFace']


w3 = Web3(HTTPProvider('http://authority0:8545'))
# w3 = Web3(HTTPProvider('http://localhost:8545'))
contract = w3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])
w3.personal.unlockAccount(main_account, "")
# Get transaction hash from deployed contract
tx_hash = contract.deploy(transaction={'from': main_account, 'gas': 410000})

is_transaction_mined = 0
while not is_transaction_mined:
    try:
        tx_receipt = w3.eth.getTransactionReceipt(tx_hash)
        tx_receipt['contractAddress']
        is_transaction_mined = 1
    except TypeError:
        pass

contract_address = tx_receipt['contractAddress']

print("Smart contract is deployed!")
with open("./contract_address/contract_address.txt", "w") as fh:
    fh.write(contract_address)
print("Contract address: ", contract_address)
# Contract instance in concise mode
contract_instance = w3.eth.contract(abi=contract_interface['abi'],
                                    address=contract_address,
                                    ContractFactoryClass=ConciseContract)


user_addresses = [w3.personal.newAccount("justpass") for x in range(5)]

passportHashes = [
    '0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8',
    '0xdceao91yhv7y4cujkslkv18z3lotlfc7zgtd0e70',
    '0x33e98hp26hqam18wdw8xg0wi42vzj6h12wikcctg',
    '0xoiqtt378kp9rtbr21sh1b48d4623i9v9b03j188s',
    '0xou0qnkrd7z024aiqsetwnh6wdayj6g3b9lxhzecq'
]

for item in range(len(user_addresses)):
    cities = ['London', 'Brussel', 'Dubai', 'Moscow', 'Washington', 'Damassc']
    city_to = choice(cities)
    city_from = choice(cities)
    aim = 'Tourism'
    description = 'Trustful person'
    timestamp = int(time.time())
    print("Trying to create traveller with following params: \naddress: ", user_addresses[item],
          "\nhash: ", passportHashes[item])
    w3.personal.unlockAccount(main_account, "")
    travel = contract_instance.createTravel(w3.toInt(timestamp),
                                            user_addresses[item],
                                            city_to,
                                            city_from,
                                            aim,
                                            description,
                                            passportHashes[item], transact={'from': main_account})
    print("Travel tx_hash = ", travel)
    w3.personal.unlockAccount(main_account, "")
    print("getHash tx = ", contract_instance.getHash(user_addresses[item], transact={'from': main_account}))



