/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TierByConstructionClaimInterface extends ethers.utils.Interface {
  functions: {
    "claim(address,bytes)": FunctionFragment;
    "claims(address)": FunctionFragment;
    "constructionBlock()": FunctionFragment;
    "isTier(address,uint8)": FunctionFragment;
    "minimumTier()": FunctionFragment;
    "tierContract()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "claims", values: [string]): string;
  encodeFunctionData(
    functionFragment: "constructionBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTier",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tierContract",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claims", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "constructionBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tierContract",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
}

export type ClaimEvent = TypedEvent<
  [string, string] & { account: string; data: string }
>;

export class TierByConstructionClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TierByConstructionClaimInterface;

  functions: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claims(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    constructionBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minimumTier(overrides?: CallOverrides): Promise<[number]>;

    tierContract(overrides?: CallOverrides): Promise<[string]>;
  };

  claim(
    account_: string,
    data_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claims(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

  isTier(
    account_: string,
    minimumTier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minimumTier(overrides?: CallOverrides): Promise<number>;

  tierContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claims(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minimumTier(overrides?: CallOverrides): Promise<number>;

    tierContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Claim(address,bytes)"(
      account?: string | null,
      data?: null
    ): TypedEventFilter<[string, string], { account: string; data: string }>;

    Claim(
      account?: string | null,
      data?: null
    ): TypedEventFilter<[string, string], { account: string; data: string }>;
  };

  estimateGas: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claims(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minimumTier(overrides?: CallOverrides): Promise<BigNumber>;

    tierContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claims(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructionBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tierContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}