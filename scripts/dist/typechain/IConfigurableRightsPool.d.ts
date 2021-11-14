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

interface IConfigurableRightsPoolInterface extends ethers.utils.Interface {
  functions: {
    "burnPoolShareFromLib(uint256)": FunctionFragment;
    "getController()": FunctionFragment;
    "mintPoolShareFromLib(uint256)": FunctionFragment;
    "pullPoolShareFromLib(address,uint256)": FunctionFragment;
    "pushPoolShareFromLib(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burnPoolShareFromLib",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintPoolShareFromLib",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullPoolShareFromLib",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushPoolShareFromLib",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "burnPoolShareFromLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintPoolShareFromLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pullPoolShareFromLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushPoolShareFromLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export class IConfigurableRightsPool extends BaseContract {
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

  interface: IConfigurableRightsPoolInterface;

  functions: {
    burnPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getController(overrides?: CallOverrides): Promise<[string]>;

    mintPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pullPoolShareFromLib(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushPoolShareFromLib(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  burnPoolShareFromLib(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getController(overrides?: CallOverrides): Promise<string>;

  mintPoolShareFromLib(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pullPoolShareFromLib(
    from: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushPoolShareFromLib(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    burnPoolShareFromLib(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getController(overrides?: CallOverrides): Promise<string>;

    mintPoolShareFromLib(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pullPoolShareFromLib(
      from: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pushPoolShareFromLib(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    burnPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getController(overrides?: CallOverrides): Promise<BigNumber>;

    mintPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pullPoolShareFromLib(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushPoolShareFromLib(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burnPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintPoolShareFromLib(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pullPoolShareFromLib(
      from: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushPoolShareFromLib(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
