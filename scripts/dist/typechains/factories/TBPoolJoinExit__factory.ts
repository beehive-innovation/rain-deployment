/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TBPoolJoinExit,
  TBPoolJoinExitInterface,
} from "../TBPoolJoinExit";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "BONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "BPOW_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "EXIT_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "INIT_POOL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_BOUND_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_BPOW_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_IN_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_OUT_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_TOTAL_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BALANCE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BOUND_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BPOW_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "echidna_no_bug_found",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getColor",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "poolAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_records_t_balance",
        type: "uint256",
      },
    ],
    name: "joinAndExitPool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506107608061002d6000396000f3fe608060405234801561001057600080fd5b50600436106101115760003560e01c80639a86139b116100ad578063bc694ea211610071578063bc694ea2146101d5578063c36596a614610154578063c6580d12146101dd578063e4a28a5214610116578063ec093021146101e557610111565b80639a86139b146101ad578063b0e0d136146101b5578063b7b800a4146101bd578063ba019dab146101c5578063bc063e1a146101cd57610111565b806309a3bbe4146101165780631819aa4214610130578063189d00ca1461014c578063218b5382146101545780632370e3a41461015c57806376c7a3c71461018d578063867378c5146101955780639381cd2b1461019d578063992e2a92146101a5575b600080fd5b61011e6101ed565b60408051918252519081900360200190f35b6101386101fa565b604080519115158252519081900360200190f35b61011e610203565b61011e610217565b61018b6004803603608081101561017257600080fd5b5080359060208101359060408101359060600135610223565b005b61011e6102fa565b61011e61030c565b61011e610320565b61011e61032d565b61011e610339565b61011e610346565b61011e61034b565b61011e610350565b61011e610355565b61011e610365565b61011e610371565b61011e610376565b6802b5e3af16b188000081565b60005460ff1681565b6402540be400670de0b6b3a76400005b0481565b670de0b6b3a764000081565b6000610230858484610386565b905068056bc75e2d6310000083111561024857600080fd5b670de0b6b3a764000083101561025d57600080fd5b678ac7230489e8000082111561027257600080fd5b620f424082101561028257600080fd5b61028c83866103f1565b925061029882826103f1565b9150600081116102a757600080fd5b838310156102b457600080fd5b60006102c1858585610445565b9050808310156102d057600080fd5b8486116102dc57600080fd5b8181146102e857600080fd5b50506000805460ff1916905550505050565b620f4240670de0b6b3a7640000610213565b64e8d4a51000670de0b6b3a7640000610213565b68056bc75e2d6310000081565b6704a03ce68d21555681565b6542524f4e5a4560d01b90565b600881565b600281565b600181565b600a670de0b6b3a7640000610213565b671bc16d674ec7ffff81565b600081565b6002670de0b6b3a7640000610213565b60008061039385856104cf565b9050806103d9576040805162461bcd60e51b815260206004820152600f60248201526e08aa4a4be9a82a890be82a0a0a49eb608b1b604482015290519081900360640190fd5b8260006103e683836105e2565b979650505050505050565b60008282018381101561043e576040805162461bcd60e51b815260206004820152601060248201526f4552525f4144445f4f564552464c4f5760801b604482015290519081900360640190fd5b9392505050565b6000806104538560006105e2565b9050600061046186836106a4565b9050600061046f82876104cf565b9050806104b5576040805162461bcd60e51b815260206004820152600f60248201526e08aa4a4be9a82a890be82a0a0a49eb608b1b604482015290519081900360640190fd5b8460006104c283836105e2565b9998505050505050505050565b600081610512576040805162461bcd60e51b815260206004820152600c60248201526b4552525f4449565f5a45524f60a01b604482015290519081900360640190fd5b670de0b6b3a7640000830283158061053a5750670de0b6b3a764000084828161053757fe5b04145b61057e576040805162461bcd60e51b815260206004820152601060248201526f11549497d1125597d25395115493905360821b604482015290519081900360640190fd5b600283048101818110156105cc576040805162461bcd60e51b815260206004820152601060248201526f11549497d1125597d25395115493905360821b604482015290519081900360640190fd5b60008482816105d757fe5b049695505050505050565b60008282028315806105fc5750828482816105f957fe5b04145b610640576040805162461bcd60e51b815260206004820152601060248201526f4552525f4d554c5f4f564552464c4f5760801b604482015290519081900360640190fd5b6706f05b59d3b20000810181811015610693576040805162461bcd60e51b815260206004820152601060248201526f4552525f4d554c5f4f564552464c4f5760801b604482015290519081900360640190fd5b6000670de0b6b3a7640000826105d7565b60008060006106b38585610706565b9150915080156106fe576040805162461bcd60e51b81526020600482015260116024820152704552525f5355425f554e444552464c4f5760781b604482015290519081900360640190fd5b509392505050565b60008082841061071c5750508082036000610724565b505081810360015b925092905056fea265627a7a723158202366b19b63a02b3737d664a4c1ae64f2fb9e36f8890c5909b8703d534ef921ea64736f6c634300050c0032";

export class TBPoolJoinExit__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TBPoolJoinExit> {
    return super.deploy(overrides || {}) as Promise<TBPoolJoinExit>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TBPoolJoinExit {
    return super.attach(address) as TBPoolJoinExit;
  }
  connect(signer: Signer): TBPoolJoinExit__factory {
    return super.connect(signer) as TBPoolJoinExit__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TBPoolJoinExitInterface {
    return new utils.Interface(_abi) as TBPoolJoinExitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TBPoolJoinExit {
    return new Contract(address, _abi, signerOrProvider) as TBPoolJoinExit;
  }
}