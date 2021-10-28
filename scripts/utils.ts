import { KeyObject } from "crypto"
import { ethers } from "hardhat"
const fs = require('fs')

const RedeemableERC20Factory = require("./dist/artifacts/contracts/rain-protocol/contracts/redeemableERC20/RedeemableERC20Factory.sol/RedeemableERC20Factory.json")
const RedeemableERC20PoolFactory = require("./dist/artifacts/contracts/rain-protocol/contracts/pool/RedeemableERC20PoolFactory.sol/RedeemableERC20PoolFactory.json")
const SeedERC20Factory = require("./dist/artifacts/contracts/rain-protocol/contracts/seed/SeedERC20Factory.sol/SeedERC20Factory.json")
const TrustFactory = require("./dist/artifacts/contracts/rain-protocol/contracts/trust/TrustFactory.sol/TrustFactory.json")

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

export async function factoriesDeploy(crpFactory: string, balancerFactory: string, signer:any) {
    const redeemableERC20FactoryAddress = await deploy(RedeemableERC20Factory, signer, []);
    console.log('- RedeemableERC20Factory deployed to: ', redeemableERC20FactoryAddress);
    
    const redeemableERC20PoolFactoryAddress = await deploy(RedeemableERC20PoolFactory, signer, [
      crpFactory,
      balancerFactory
    ]);
    exportArguments(
      RedeemableERC20PoolFactory.contractName, 
      [crpFactory, balancerFactory]
    );
    console.log('- RedeemableERC20PoolFactory deployed to: ', redeemableERC20PoolFactoryAddress);
    
    const seedERC20FactoryAddress = await deploy(SeedERC20Factory, signer, []);
    console.log('- SeedERC20Factory deployed to: ', seedERC20FactoryAddress);

    const trustFactoryAddress = await deploy(TrustFactory, signer, [
      redeemableERC20FactoryAddress,
      redeemableERC20PoolFactoryAddress,
      seedERC20FactoryAddress
    ]);
    exportArguments(
      TrustFactory.contractName, 
      [redeemableERC20FactoryAddress, redeemableERC20PoolFactoryAddress, seedERC20FactoryAddress]
    );
    return {
      redeemableERC20FactoryAddress,
      redeemableERC20PoolFactoryAddress,
      seedERC20FactoryAddress,
      trustFactoryAddress,
    };
  };

export function editSolc(address: string[]) {
  const fileJson = 'scripts/dist/solt/solc-input-crpfactory.json'
  const content = JSON.parse(fs.readFileSync(fileJson).toString())
  const keys = Object.keys(content.settings.libraries);
  for(let i = 0; i < keys.length; i++) {
    const aux = Object.keys(content.settings.libraries[keys[i]])[0];
    content.settings.libraries[keys[i]][aux] = address[i];
  }
  fs.writeFileSync(fileJson, JSON.stringify(content, null, 4));
}

export function exportArguments(name:string, args:string[]) {
  const fileJson = 'scripts/dist/solt/arguments.json'
  const content = JSON.parse(fs.readFileSync(fileJson).toString())
  let argumts = "";
  for (let i = 0; i < args.length; i++) {
    argumts = argumts.concat("000000000000000000000000").concat(args[i].replace("0x", ""));
  }
  content[name]= argumts
  fs.writeFileSync(fileJson, JSON.stringify(content, null, 4));
}