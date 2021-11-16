/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerConstants,
  BalancerConstantsInterface,
} from "../BalancerConstants";

const _abi = [
  {
    inputs: [],
    name: "BONE",
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
    inputs: [],
    name: "EXIT_FEE",
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
    inputs: [],
    name: "MAX_ASSET_LIMIT",
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
    inputs: [],
    name: "MAX_BALANCE",
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
    inputs: [],
    name: "MAX_FEE",
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
    inputs: [],
    name: "MAX_IN_RATIO",
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
    inputs: [],
    name: "MAX_OUT_RATIO",
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
    inputs: [],
    name: "MAX_POOL_SUPPLY",
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
    inputs: [],
    name: "MAX_TOTAL_WEIGHT",
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
    inputs: [],
    name: "MAX_UINT",
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
    inputs: [],
    name: "MAX_WEIGHT",
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
    inputs: [],
    name: "MIN_ASSET_LIMIT",
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
    inputs: [],
    name: "MIN_BALANCE",
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
    inputs: [],
    name: "MIN_FEE",
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
    inputs: [],
    name: "MIN_POOL_SUPPLY",
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
    inputs: [],
    name: "MIN_WEIGHT",
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
];

const _bytecode =
  "0x610277610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061010a5760003560e01c8063bc063e1a116100a1578063def92c6911610070578063def92c6914610171578063e4a28a521461010f578063e5b5019a14610179578063ec093021146101815761010a565b8063bc063e1a14610159578063c36596a614610129578063c6580d1214610161578063cc12f267146101695761010a565b806376c7a3c7116100dd57806376c7a3c7146101415780637e88781c14610149578063867378c514610141578063992e2a92146101515761010a565b806309a3bbe41461010f578063218b5382146101295780634d1acbab146101315780636fd34b9f14610139575b600080fd5b610117610189565b60408051918252519081900360200190f35b610117610196565b6101176101a2565b6101176101a7565b6101176101ac565b6101176101be565b6101176101cb565b6101176101d7565b6101176101e7565b6101176101ec565b6101176101fc565b61011761020d565b610117610231565b6802b5e3af16b188000081565b670de0b6b3a764000081565b600281565b600881565b620f4240670de0b6b3a76400005b0481565b68056bc75e2d6310000081565b6704a03ce68d21555681565b600a670de0b6b3a76400006101ba565b600081565b6b033b2e3c9fd0803ce800000081565b6c0c9f2c9cd04674edea4000000081565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81565b6002670de0b6b3a76400006101ba56fea2646970667358221220f47093f7fc11128b87bc2ce50e751838e4c0d93f7a6eb3eebce7536478ec98cf64736f6c634300060c0033";

export class BalancerConstants__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancerConstants> {
    return super.deploy(overrides || {}) as Promise<BalancerConstants>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancerConstants {
    return super.attach(address) as BalancerConstants;
  }
  connect(signer: Signer): BalancerConstants__factory {
    return super.connect(signer) as BalancerConstants__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerConstantsInterface {
    return new utils.Interface(_abi) as BalancerConstantsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerConstants {
    return new Contract(address, _abi, signerOrProvider) as BalancerConstants;
  }
}