pragma solidity ^0.4.19;

contract BInterface {
    function getBalance() public view returns(uint256);
    function receive() payable public;
}

contract A {
    BInterface binterface;
    event booleanA(string boolean);
    
    address BContract;
    constructor() public payable {
        
    } 
    
    function setBAddress(address _address) public {
        binterface = BInterface(_address);
        BContract = _address;
    }
    
    // works
    function sendUsingTransfer() public payable {
        BContract.transfer(msg.value);
    }
    
    // not working cuz target wont receive
    function send() public payable {
        if (binterface.receive.value(msg.value)) {
            emit booleanA("true");
        }
        else {
            emit booleanA("false");
        }
    }
    
    function getBalanceOfB() public view returns(uint256){
        uint256 _balance = binterface.getBalance();
        return _balance;
    }
    
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
}