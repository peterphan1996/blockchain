import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { default as Web3 } from 'web3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symtomps: "",
      diagnosis: "",
      treatment: "",
      count: null,
      buyICOCode: "0x6080604052426224ea000160045530600160a060020a03163160055534801561002757600080fd5b50604051602080610532833981016040525160008054600160a060020a0392831661010083900a90810293021990811683179091556006805490911690911790556104bb806100776000396000f3006080604052600436106100745763ffffffff60e060020a6000350416630e29df22811461007957806312065fe01461008357806338ecfbb0146100ab578063971f6927146100cc578063ade3171e146100e1578063b9f890de14610102578063c59b55621461013f578063efcd4db914610147575b600080fd5b61008161015c565b005b34801561008f57600080fd5b506100986101e7565b6040805191825251602090910181900390f35b3480156100b757600080fd5b50610081600160a060020a03600435166101f5565b3480156100d857600080fd5b5061009861021e565b3480156100ed57600080fd5b50610098600160a060020a0360043516610224565b34801561010e57600080fd5b50610117610236565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b61008161024d565b34801561015357600080fd5b506100816102ba565b426004541015151561016d57600080fd5b30600160a060020a031631346003540114151561018957600080fd5b30600160a060020a03908116316003556002805460019081018083556000928352602080842091839003909101805461010085900a808702199091163387169182021790915590931682528282019081529091019020805434019055565b600160a060020a0330163190565b806000806101000a815481600160a060020a030219169083600160a060020a0316021790555050565b60035490565b60016020526000908152604090205481565b60065460006101000a9004600160a060020a031690565b6000809054906101000a9004600160a060020a0316600160a060020a0316634185f8eb346040518263ffffffff1660e060020a0281526004016000604051808303818588803b15801561029f57600080fd5b505af11580156102b3573d6000803e3d6000fd5b5050505050565b60006003546000809054906101000a9004600160a060020a0316600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561032e57600080fd5b505af1158015610342573d6000803e3d6000fd5b505050506040513d602081101561035857600080fd5b50516002805460019160009182908110151561037057fe5b9060005260206000200160009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a0316815260200190815260200160002054028115156103b957fe5b0490506000809054906101000a9004600160a060020a0316600160a060020a031663a9059cbb600260008154811015156103ef57fe5b9060005260206000200160009054906101000a9004600160a060020a0316836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561046057600080fd5b505af1158015610474573d6000803e3d6000fd5b505050506040513d602081101561048a57600080fd5b5050505600a165627a7a7230582001563f88044b6cbd2c34ef75454122c537da9ca507a96d3aa7521d8817545e690029",
      ERC20Code: "0x60008054600160a060020a0319163317905560c0604052600360808190527f465744000000000000000000000000000000000000000000000000000000000060a090815261005091600291906100cc565b5060408051808201909152600c8082527f62697466776420546f6b656e00000000000000000000000000000000000000006020909201918252610095916003916100cc565b5060048054601260ff1990911617908190554262093a808101600755624099800160085560ff16600a0a620f424002600555610167565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010d57805160ff191683800117855561013a565b8280016001018555821561013a579182015b8281111561013a57825182559160200191906001019061011f565b5061014692915061014a565b5090565b61016491905b808211156101465760008155600101610150565b90565b610c94806101766000396000f3006080604052600436106101325763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461013c578063095ea7b3146101c65780630b97bc86146101fe57806318160ddd1461022557806323b872dd1461023a578063313ce567146102645780633eaaf86b1461028f57806340c65003146102a45780634185f8eb1461013257806370a08231146102b957806379ba5097146102da5780638da5cb5b146102ef57806395d89b4114610320578063a9059cbb14610335578063b2aeb44e14610359578063c24a0f8b1461036e578063cae9ca5114610383578063d4ee1d90146103ec578063dc39d06d14610401578063dd62ed3e14610425578063e12148151461044c578063f2fde38b14610461578063f8a8fd6d14610482575b61013a61048a565b005b34801561014857600080fd5b50610151610579565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018b578181015183820152602001610173565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d257600080fd5b506101ea600160a060020a0360043516602435610607565b604080519115158252519081900360200190f35b34801561020a57600080fd5b5061021361066e565b60408051918252519081900360200190f35b34801561023157600080fd5b50610213610674565b34801561024657600080fd5b506101ea600160a060020a03600435811690602435166044356106a6565b34801561027057600080fd5b5061027961079f565b6040805160ff9092168252519081900360200190f35b34801561029b57600080fd5b506102136107a8565b3480156102b057600080fd5b506102136107ae565b3480156102c557600080fd5b50610213600160a060020a03600435166107b4565b3480156102e657600080fd5b5061013a6107cf565b3480156102fb57600080fd5b50610304610857565b60408051600160a060020a039092168252519081900360200190f35b34801561032c57600080fd5b50610151610866565b34801561034157600080fd5b506101ea600160a060020a03600435166024356108be565b34801561036557600080fd5b50610304610962565b34801561037a57600080fd5b50610213610971565b34801561038f57600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526101ea948235600160a060020a03169460248035953695946064949201919081908401838280828437509497506109779650505050505050565b3480156103f857600080fd5b50610304610ad8565b34801561040d57600080fd5b506101ea600160a060020a0360043516602435610ae7565b34801561043157600080fd5b50610213600160a060020a0360043581169060243516610ba2565b34801561045857600080fd5b50610304610bcd565b34801561046d57600080fd5b5061013a600160a060020a0360043516610bdc565b61013a610c22565b60075460009042116104a157506104b034026104a8565b506103e834025b336000908152600a60205260409020546104c29082610c43565b336000908152600a60205260409020556005546104df9082610c43565b6005556009805473ffffffffffffffffffffffffffffffffffffffff1916339081179091556040805183815290516000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a360008054604051600160a060020a03909116913480156108fc02929091818181858888f19350505050158015610575573d6000803e3d6000fd5b5050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105ff5780601f106105d4576101008083540402835291602001916105ff565b820191906000526020600020905b8154815290600101906020018083116105e257829003601f168201915b505050505081565b336000818152600b60209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60065481565b60008052600a6020527f13da86008ba1c6922daee3e07db95305ef49ebced9f5467a0b8613fcc6b343e3546005540390565b600160a060020a0383166000908152600a60205260408120546106c99083610c53565b600160a060020a0385166000908152600a6020908152604080832093909355600b8152828220338352905220546107009083610c53565b600160a060020a038086166000908152600b602090815260408083203384528252808320949094559186168152600a909152205461073e9083610c43565b600160a060020a038085166000818152600a602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b60045460ff1681565b60055481565b60075481565b600160a060020a03166000908152600a602052604090205490565b600154600160a060020a031633146107e657600080fd5b60015460008054604051600160a060020a0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156105ff5780601f106105d4576101008083540402835291602001916105ff565b336000908152600a60205260408120546108d89083610c53565b336000908152600a602052604080822092909255600160a060020a038516815220546109049083610c43565b600160a060020a0384166000818152600a60209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600954600160a060020a031690565b60085481565b336000818152600b60209081526040808320600160a060020a038816808552908352818420879055815187815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a36040517f8f4ffcb10000000000000000000000000000000000000000000000000000000081523360048201818152602483018690523060448401819052608060648501908152865160848601528651600160a060020a038a1695638f4ffcb195948a94938a939192909160a490910190602085019080838360005b83811015610a67578181015183820152602001610a4f565b50505050905090810190601f168015610a945780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610ab657600080fd5b505af1158015610aca573d6000803e3d6000fd5b506001979650505050505050565b600154600160a060020a031681565b60008054600160a060020a03163314610aff57600080fd5b60008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810186905290519186169263a9059cbb926044808401936020939083900390910190829087803b158015610b6f57600080fd5b505af1158015610b83573d6000803e3d6000fd5b505050506040513d6020811015610b9957600080fd5b50519392505050565b600160a060020a039182166000908152600b6020908152604080832093909416825291909152205490565b600954600160a060020a031681565b600054600160a060020a03163314610bf357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6009805473ffffffffffffffffffffffffffffffffffffffff191633179055565b8181018281101561066857600080fd5b600082821115610c6257600080fd5b509003905600a165627a7a723058208333a0e65d8269388c1e43c4f8af85dabc5a34737f72e5d25c06570232cc31b60029",
      buyICOContract: window.web3.eth.contract([
        {
          "constant": false,
          "inputs": [],
          "name": "buyICO",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "sendEther",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "setEtherToICOContract",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "transferICOToOwner",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_address",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getERC20Address",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getTotalInEther",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "",
              "type": "address"
            }
          ],
          "name": "OwnerToEther",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]),
      ERC20Contract: window.web3.eth.contract([
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
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
              "name": "spender",
              "type": "address"
            },
            {
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "startDate",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "from",
              "type": "address"
            },
            {
              "name": "to",
              "type": "address"
            },
            {
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "_totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "bonusEnds",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "receiveEth",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "tokenOwner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "balance",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "acceptOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
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
              "name": "to",
              "type": "address"
            },
            {
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getLatestSender",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "endDate",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "spender",
              "type": "address"
            },
            {
              "name": "tokens",
              "type": "uint256"
            },
            {
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "approveAndCall",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "newOwner",
          "outputs": [
            {
              "name": "",
              "type": "address"
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
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "transferAnyERC20Token",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "remaining",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "latestSender",
          "outputs": [
            {
              "name": "",
              "type": "address"
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
              "name": "_newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "test",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "tokens",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        }
      ]),
      buyICOContractInstance: null,
      ERC20ContractInstance: null,
      account: ""
    }
    this.createBuyICOContract = this.createBuyICOContract.bind(this);
    this.createERC20Contract = this.createERC20Contract.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSymtompsChange = this.handleSymtompsChange.bind(this);
    this.handleTreatmentChange = this.handleTreatmentChange.bind(this);
    this.handleDiagnosisChange = this.handleDiagnosisChange.bind(this);
    this.handleRecordCountChange = this.handleRecordCountChange.bind(this);
  }

  updateAccount = (accs) => {
    this.setState({ account: accs[0]});
    window.web3.eth.defaultAccount = this.state.account;
  }


  componentDidMount() {

    window.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      this.updateAccount(accs)

    });
  
  }

  handleNameChange (event) {
    this.setState ({ name: event.target.value});
  }

  handleAgeChange (event) {
    this.setState ({ age: event.target.value});
  }

  handleSymtompsChange (event) {
    this.setState ({ symtomps: event.target.value});
  }

  handleTreatmentChange (event) {
    this.setState ({ treatment: event.target.value});
  }

  handleDiagnosisChange (event) {
    this.setState ({ diagnosis: event.target.value});
  }

  handleRecordCountChange (event) {
    this.setState ({ count: event.target.value});
  }


  createBuyICOContract() {
    // var message = document.getElementById('message');
    // message.innerText = 'attempting new contract...';
    var _address = document.getElementById('ERC20ContractAddress').value
    var patient = this.state.buyICOContract.new(
      _address,
      {
        from: this.state.account,
        data: this.state.buyICOCode,
        gas: '4700000'
      }, function (e, contract) {
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          document.getElementById('buyICOContractAddress').value = contract.address;
        }
      })
  };

  createERC20Contract() {
    // var message = document.getElementById('message');
    // message.innerText = 'attempting new contract...';
    var patient = this.state.ERC20Contract.new(
      {
        from: this.state.account,
        data: this.state.ERC20Code,
        gas: '4700000'
      }, function (e, contract) {
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          document.getElementById('ERC20ContractAddress').value = contract.address;
        }
      })
  };


  getBalanceOfBuyICOContract = () => {

    var contractAddress = document.getElementById('buyICOContractAddress').value.toString();
    var deployedBuyICO = this.state.buyICOContract.at(contractAddress);

    deployedBuyICO.getBalance(function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Balance is: ", result);
    });
  }

  getBalanceOfERC20Contract = () => {

    var contractAddress = document.getElementById('ERC20ContractAddress').value.toString();
    var deployedERC20 = this.state.ERC20Contract.at(contractAddress);
    var _address = document.getElementById('buyICOContractAddress').value.toString();

    deployedERC20.balanceOf(_address, function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Balance is: ", result);
    });
  }

  getTotalSupplyOfERC20Contract = () => {
    var contractAddress = document.getElementById('ERC20ContractAddress').value.toString();
    var deployedERC20 = this.state.ERC20Contract.at(contractAddress);

    deployedERC20.totalSupply(function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Balance is: ", result);
    });
  }

  sendEtherInBuyICOContract = () => {

    var contractAddress = document.getElementById('buyICOContractAddress').value.toString();
    var deployedBuyICO = this.state.buyICOContract.at(contractAddress);

    deployedBuyICO.sendEther({from: this.state.account, gas: 3000000, value: 2000000000000000000}, function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Result is: ", result);
    });
  }

  buyICOInICOContract = () => {

    var contractAddress = document.getElementById('buyICOContractAddress').value.toString();
    var deployedBuyICO = this.state.buyICOContract.at(contractAddress);

    deployedBuyICO.buyICO({from: this.state.account, gas: 3000000, value: 1000000000000000000}, function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Result is: ", result);
    });
  }

  getAddressERC20 = () => {

    var contractAddress = document.getElementById('buyICOContractAddress').value.toString();
    var deployedBuyICO = this.state.buyICOContract.at(contractAddress);

    deployedBuyICO.getERC20Address(function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Result is: ", result);
    });
  }

  getLatestSender = () => {
    var contractAddress = document.getElementById('ERC20ContractAddress').value.toString();
    var deployedERC20 = this.state.ERC20Contract.at(contractAddress);

    deployedERC20.getLatestSender(function (error,result) {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Result is: ",result);
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br /> <label htmlFor="contractAddress">Buy ICO Contract Address:</label> <input type="text" id="buyICOContractAddress" placeholder="Scan address or create a new contract"></input>
        <br /> <label htmlFor="contractAddress">ERC20 Contract Address:</label> <input type="text" id="ERC20ContractAddress" placeholder="Scan address or create a new contract"></input>
        <br />
        <br />
        <br />
        <button onClick={this.createBuyICOContract}> Create Buy ICO Contract </button>
        <br/>
        <br/>
        <button onClick={this.createERC20Contract}> Create ERC20 Contract </button>
        <br/>
        <br/>
        <form>
          <input 
            type="text" 
            name="symtomps" 
            placeholder="Enter new symtomps ..."
            value={this.state.symtomps}
            onChange={ this.handleSymtompsChange }/>
          <input 
            type="text" 
            name="diagnosis" 
            placeholder="Enter new diagnosis ..."
            value={this.state.diagnosis}
            onChange={ this.handleDiagnosisChange }/>
          <input 
            type="text" 
            name="treatment" 
            placeholder="Enter new treatment ..."
            value={this.state.treatment}
            onChange={ this.handleTreatmentChange }/>
        </form>
        <button onClick={this.addNewRecord}> Add new record ... </button>
        <form>
          <input 
            type="text" 
            name="count"
            onChange={ this.handleRecordCountChange }/>
        </form>
        <button onClick={this.buyICOInICOContract}> Buy ICO ... </button>
        <button onClick={this.getBalanceOfBuyICOContract}> Get balance of Buy ICO Contract ... </button>
        <button onClick={this.sendEtherInBuyICOContract}> Send 3 ethers to Buy ICO Contracts ... </button>
        <button onClick={this.getBalanceOfERC20Contract}> Get balance of Buy ICO contract in ERC20 ... </button>
        <button onClick={this.getLatestSender}> Get latest sender ... </button>
        <button onClick={this.getAddressERC20}> Get address of ERC20 ... </button>
      </div>
    );
  }
}

export default App;
