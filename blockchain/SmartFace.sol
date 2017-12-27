pragma solidity 0.4.19;


contract DubaiSmartFace {

    mapping (address => string[]) mapAddressUserHash;
    mapping (string => travelStruct[])  mapHashPasport;


    // to,from,aim,description,timshtamp,hashPasport,address

    struct travelStruct {
        uint timshtamp;
        address faceid;
        string to;
        string from;
        string aim;
        string description;
        string hashPasport;
    }

    function getHash(address _faceId) public constant returns (bytes32[]){
        string[]  massPassportId = mapAddressUserHash[_faceId];
        bytes32[] result;
        for (uint i=0; i < mapAddressUserHash[_faceId].length; i++){
            result.push(stringToBytes32(mapAddressUserHash[_faceId][i]));
        }
       return result;
    }

    function createUser(address _faceId, string _hashPasport)returns (bool){
        uint lenght = mapAddressUserHash[_faceId].length;
        mapAddressUserHash[_faceId].push(_hashPasport);
        if(mapAddressUserHash[_faceId].length - 1 == lenght)return true;
        return false;
    }

    function getTravelbyHash(string _hashPasport) constant returns(travelStruct[]) {
        return mapHashPasport[_hashPasport];

    }
    function createTravel(uint _timeshtamp,address _faceId,string _to,string _from,string _aim,
    string _description, string _hashPasport) returns(bool){
        mapHashPasport[_hashPasport].push(travelStruct(_timeshtamp,_faceId,_to,
        _from,_aim,_description,_hashPasport));
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
