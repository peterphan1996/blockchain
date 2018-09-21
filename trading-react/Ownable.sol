pragma solidity ^0.4.19;

contract Ownable {
  address public owner;

  constructor() public payable {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

}
