pragma solidity ^0.4.19;

contract B {
    address AContract;
    event hey(string name);
    string a;
    string b;
    uint256 c;
    
    constructor() public payable {
        
    } 
    function setBAddress(address _address) public {
        AContract = _address;
    }
    
    function receive() payable public{
        emit hey("omg");
        address(this).transfer(msg.value);
    }
    
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
    
    function () public payable {
        // setBAddress(0x16d6Ca065bb3af786AD5a907bE75F92d5c68D73C);
        emit hey("ong");
    }
    
}