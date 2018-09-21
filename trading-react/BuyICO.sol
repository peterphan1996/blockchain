pragma solidity ^0.4.19;

import "./Ownable.sol";

contract EtherToICOInterface {
    
    
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function transfer(address to, uint tokens) public returns (bool success);
    function receiveEth() public payable;
    function test() public payable;

}

contract BuyICO {
    EtherToICOInterface etherToICOContract;
    // etherToICOContract = EtherToICOInterface(0xD0FDf2ECd4CadE671a7EE1063393eC0eB90816FD);
    
    mapping (address => uint) public OwnerToEther;
    address[] buyers;
    uint totalInEth;
    uint endDate = now + 4 weeks;
    uint balance = address(this).balance;
    address ICOAddress;
    
    constructor(address _address) public {
        etherToICOContract = EtherToICOInterface(_address);
        ICOAddress = _address;
    }

    function setEtherToICOContract(address _address) external {
        etherToICOContract = EtherToICOInterface(_address);
    }
    
    function sendEther() public payable {
        require(endDate >= now);
        require(totalInEth + msg.value == address(this).balance);
        totalInEth = address(this).balance;
        buyers.push(msg.sender);
        OwnerToEther[msg.sender] += msg.value;
    }
    
    function getTotalInEther() public view returns(uint){
        return totalInEth;
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function buyICO() external payable {
        
        // etherToICOContract.Sample().value(address(this).balance);
        // Sample address of FWDToken: 0xD0FDf2ECd4CadE671a7EE1063393eC0eB90816FD FWDToken
        // ICOAddress.transfer(1000 wei);
        // require(ICOAddress.call.value(1 ether).gas(200317)());
        // uint256 _value = 100000000 wei;
        
        etherToICOContract.receiveEth.value(msg.value)();
    }
    
    function transferICOToOwner() external {
        uint ICOAmount;
        // require(etherToICOContract.balanceOf(address(this)) > 0);
        // for (uint i = 0; i < buyers.length; i++) {
        //     ICOAmount = OwnerToEther[buyers[i]] * etherToICOContract.balanceOf(address(this)) / totalInEth;
        //     etherToICOContract.transferFrom(address(this), buyers[i], ICOAmount);
        // }
        ICOAmount = OwnerToEther[buyers[0]] * etherToICOContract.balanceOf(address(this)) / totalInEth;
        etherToICOContract.transfer(buyers[0], ICOAmount);
        
    }
    
    function getERC20Address() public view returns(address) {
        return ICOAddress;
    }
}