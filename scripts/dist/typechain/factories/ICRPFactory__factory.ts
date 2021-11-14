/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICRPFactory, ICRPFactoryInterface } from "../ICRPFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factoryAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "poolTokenSymbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "poolTokenName",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "constituentTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenBalances",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenWeights",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
        ],
        internalType: "struct PoolParams",
        name: "poolParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "canPauseSwapping",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canChangeSwapFee",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canChangeWeights",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canAddRemoveTokens",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canWhitelistLPs",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canChangeCap",
            type: "bool",
          },
        ],
        internalType: "struct Rights",
        name: "rights",
        type: "tuple",
      },
    ],
    name: "newCrp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICRPFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ICRPFactoryInterface {
    return new utils.Interface(_abi) as ICRPFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICRPFactory {
    return new Contract(address, _abi, signerOrProvider) as ICRPFactory;
  }
}
