from web3 import Web3, HTTPProvider
from solc import compile_source
from web3.contract import ConciseContract

filename = 'SmartFace.sol'
# filename = 'Greeter.sol'
with open(filename, 'r') as fh:
    smart_face_src = fh.read()


compiled_sol = compile_source(smart_face_src)
contract_interface = compiled_sol['<stdin>:DubaiSmartFace']


w3 = Web3(HTTPProvider('http://authority0:8545'))
contract = w3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])
w3.personal.unlockAccount("0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B", "")
# Get transaction hash from deployed contract
tx_hash = contract.deploy(transaction={'from': "0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B", 'gas': 410000})

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
print("Contract address: ", contract_address)
# Contract instance in concise mode
contract_instance = w3.eth.contract(contract_interface['abi'], contract_address, ContractFactoryClass=ConciseContract)


