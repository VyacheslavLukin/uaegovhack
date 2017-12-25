pragma solidity ^0.4.16;



contract SmartFace {

    mapping (address => string[]) mapAddressUserHash;
    mapping (string =>travelStruct[])  mapHashPassport;


    // to,from,aim,description,timestamp,hashPassport,address

    struct travelStruct {
        uint timestamp;
        address faceid;
        string to;
        string from;
        string aim;
        string description;
        string hashPassport;
    }

    function getHash(address _faceId) constant returns (bytes32[]){
        string []  massPassportId = mapAddressUserHash[_faceId];
        bytes32[] result;
        for (uint i=0; i<mapAddressUserHash[_faceId].length; i++){
            result.push(stringToBytes32(mapAddressUserHash[_faceId][i]));
        }
        return result;
    }

    function createUser(address _faceId, string _hashPassport)returns (bool){
        uint length = mapAddressUserHash[_faceId].length;
        mapAddressUserHash[_faceId].push(_hashPassport);
        if(mapAddressUserHash[_faceId].length - 1 == lenght)return true;
        return false;
    }

    function getTravelbyHash(string _hashPassport) constant returns(travelStruct[]) {
        return mapHashPassport[_hashPassport];

    }
    function createTravel(uint _timestamp,address _faceId,string _to,string _from,string _aim,
        string _description, string _hashPasport) returns(bool){
        mapHashPassport[_hashPassport].push(travelStruct(_timestamp,_faceId,_to,
            _from,_aim,_description,_hashPassport));
        return true;
    }

    function stringToBytes32(string memory source) private returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

}