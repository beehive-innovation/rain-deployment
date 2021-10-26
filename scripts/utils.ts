import { ethers } from "hardhat"

import type { CRPFactory } from "./dist/typechain/CRPFactory";
import type { BFactory } from "./dist/typechain/BFactory";

import RedeemableERC20Factory  from "./dist/artifacts/contracts/redeemableERC20/RedeemableERC20Factory.sol/RedeemableERC20Factory.json"
import RedeemableERC20PoolFactory  from "./dist/artifacts/contracts/pool/RedeemableERC20PoolFactory.sol/RedeemableERC20PoolFactory.json"
import SeedERC20Factory  from "./dist/artifacts/contracts/seed/SeedERC20Factory.sol/SeedERC20Factory.json"
import TrustFactory  from "./dist/artifacts/contracts/trust/TrustFactory.sol/TrustFactory.json"

export async function deploy(artifact:any, signer:any, args:any[]) {
    const iface = new ethers.utils.Interface(artifact.abi)
    const factory = new ethers.ContractFactory(iface, artifact.bytecode, signer)
    const contract = await factory.deploy(args)
    await contract.deployTransaction.wait()
    return contract.address
}

export function linkBytecode(bytecode:any, links:any) {
    Object.keys(links).forEach(library_name => {
      const library_address = links[library_name];
      const regex = new RegExp(`__${library_name}_+`, "g");

      bytecode = bytecode.replace(regex, library_address.replace("0x", ""));
    });
    return bytecode;
}

export async function deployFromTx(artifact:any, signer:any) {
    const tx = {
        data: artifact.deploy_tx,
        chainId: await signer.provider.send('eth_chainId')
    }
    const deployTx = await signer.sendTransaction(tx)
    return deployTx.creates
}

export async function factoriesDeploy(crpFactory: CRPFactory, balancerFactory: BFactory, signer:any) {
    const redeemableERC20FactoryAddress = await deploy(RedeemableERC20Factory, signer, []);
    console.log('- RedeemableERC20Factory deployed to: ', redeemableERC20FactoryAddress);
    
    const redeemableERC20PoolFactoryAddress = await deploy(RedeemableERC20PoolFactory, signer, [
      crpFactory.address,
      balancerFactory.address
    ]);
    console.log('- RedeemableERC20PoolFactory deployed to: ', redeemableERC20PoolFactoryAddress);
    
    const seedERC20FactoryAddress = await deploy(SeedERC20Factory, signer, []);
    console.log('- SeedERC20Factory deployed to: ', seedERC20FactoryAddress);
  
    const trustFactoryAddress = await deploy(TrustFactory, signer, [
      redeemableERC20FactoryAddress,
      redeemableERC20PoolFactoryAddress,
      seedERC20FactoryAddress
    ]);
    
    return {
      redeemableERC20FactoryAddress,
      redeemableERC20PoolFactoryAddress,
      seedERC20FactoryAddress,
      trustFactoryAddress,
    };
  };