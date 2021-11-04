/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TToken, TTokenInterface } from "../TToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "whom",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000b8538038062000b858339818101604052606081101561003557600080fd5b810190808051604051939291908464010000000082111561005557600080fd5b90830190602082018581111561006a57600080fd5b825164010000000081118282018810171561008457600080fd5b82525081516020918201929091019080838360005b838110156100b1578181015183820152602001610099565b50505050905090810190601f1680156100de5780820380516001836020036101000a031916815260200191505b506040526020018051604051939291908464010000000082111561010157600080fd5b90830190602082018581111561011657600080fd5b825164010000000081118282018810171561013057600080fd5b82525081516020918201929091019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b5060405260209081015185519093506101a992506000918601906101eb565b5081516101bd9060019060208501906101eb565b506002805460ff191660ff9290921691909117610100600160a81b03191661010033021790555061027e9050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022c57805160ff1916838001178555610259565b82800160010185558215610259579182015b8281111561025957825182559160200191906001019061023e565b50610265929150610269565b5090565b5b80821115610265576000815560010161026a565b6108f7806200028e6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f19146101d957806342966c681461020557806370a082311461022257806395d89b4114610248578063a9059cbb14610250578063dd62ed3e1461027c576100a9565b806306fdde03146100ae578063095ea7b31461012b57806318160ddd1461016b57806323b872dd14610185578063313ce567146101bb575b600080fd5b6100b66102aa565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f05781810151838201526020016100d8565b50505050905090810190601f16801561011d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101576004803603604081101561014157600080fd5b506001600160a01b038135169060200135610340565b604080519115158252519081900360200190f35b6101736103a7565b60408051918252519081900360200190f35b6101576004803603606081101561019b57600080fd5b506001600160a01b038135811691602081013590911690604001356103ad565b6101c3610519565b6040805160ff9092168252519081900360200190f35b610157600480360360408110156101ef57600080fd5b506001600160a01b038135169060200135610522565b6101576004803603602081101561021b57600080fd5b503561058c565b6101736004803603602081101561023857600080fd5b50356001600160a01b031661064f565b6100b661066a565b6101576004803603604081101561026657600080fd5b506001600160a01b0381351690602001356106ca565b6101736004803603604081101561029257600080fd5b506001600160a01b03813581169160200135166106d7565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b5050505050905090565b3360008181526005602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60035490565b6000336001600160a01b03851614806103e957506001600160a01b03841660009081526005602090815260408083203384529091529020548211155b610432576040805162461bcd60e51b815260206004820152601560248201527422a9292fa12a27a5a2a72fa120a22fa1a0a62622a960591b604482015290519081900360640190fd5b61043d848484610702565b336001600160a01b0385161480159061047b57506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b1561050f576001600160a01b03841660009081526005602090815260408083203384529091529020546104ae9083610802565b6001600160a01b03858116600090815260056020908152604080832033808552908352928190208590558051948552519287169391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35b5060019392505050565b60025460ff1690565b60025460009061010090046001600160a01b03163314610579576040805162461bcd60e51b815260206004820152600d60248201526c22a9292fa727aa2fa7aba722a960991b604482015290519081900360640190fd5b6105838383610812565b50600192915050565b306000908152600460205260408120548211156105e7576040805162461bcd60e51b815260206004820152601460248201527311549497d25394d551919250d251539517d0905360621b604482015290519081900360640190fd5b306000908152600460205260409020546106019083610802565b3060009081526004602052604090205560035461061e9083610802565b60035560408051838152905160009130916000805160206108a28339815191529181900360200190a3506001919050565b6001600160a01b031660009081526004602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103365780601f1061030b57610100808354040283529160200191610336565b6000610583338484610702565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b6001600160a01b038316600090815260046020526040902054811115610766576040805162461bcd60e51b815260206004820152601460248201527311549497d25394d551919250d251539517d0905360621b604482015290519081900360640190fd5b6001600160a01b0383166000908152600460205260409020546107899082610802565b6001600160a01b0380851660009081526004602052604080822093909355908416815220546107b89082610891565b6001600160a01b0380841660008181526004602090815260409182902094909455805185815290519193928716926000805160206108a283398151915292918290030190a3505050565b808203828111156103a157600080fd5b6001600160a01b0382166000908152600460205260409020546108359082610891565b6001600160a01b03831660009081526004602052604090205560035461085b9082610891565b6003556040805182815290516001600160a01b038416916000916000805160206108a28339815191529181900360200190a35050565b808201828110156103a157600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212209e3e489dd3d6aa184ec075db9ac8e4d3009bd9f6f137d73552a78ab3476f795964736f6c634300060c0033";

export class TToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TToken> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<TToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  attach(address: string): TToken {
    return super.attach(address) as TToken;
  }
  connect(signer: Signer): TToken__factory {
    return super.connect(signer) as TToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TTokenInterface {
    return new utils.Interface(_abi) as TTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TToken {
    return new Contract(address, _abi, signerOrProvider) as TToken;
  }
}