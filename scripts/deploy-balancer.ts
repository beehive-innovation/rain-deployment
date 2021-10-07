import { ethers } from "hardhat"

import BFactory  from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/balancer-core/contracts/BFactory.sol/BFactory.json"
import CRPFactory from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/contracts/CRPFactory.sol/CRPFactory.json"
import RightsManager from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/RightsManager.sol/RightsManager.json"
import SmartPoolManager from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/SmartPoolManager.sol/SmartPoolManager.json"
import BalancerSafeMath from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/BalancerSafeMath.sol/BalancerSafeMath.json"
// import Prestige from '../balancer_mainnet_bytecode/PrestigeDeployTx.json'

import CRPFactoryProvisional from "./dist/CRPFactory.sol/CRPFactory.json"
//----
import {deploy, linkBytecode} from "./utils";

   
async function main() {
    const signers = await ethers.getSigners()

    const SmartPoolManagerAddress = await deploy(SmartPoolManager, signers[0], [])
    console.log('SmartPoolManager deployed to: ', SmartPoolManagerAddress)

    const BalancerSafeMathAddress = await deploy(BalancerSafeMath, signers[0], [])
    console.log('BalancerSafeMath deployed to: ', BalancerSafeMathAddress)

    const RightsManagerAddress = await deploy(RightsManager, signers[0], [])
    console.log('RightsManager deployed to: ', RightsManagerAddress)

    const BFactoryAddress = await deploy(BFactory, signers[0], [])
    console.log('BFactory deployed to: ', BFactoryAddress)

    let _CRPFactory = CRPFactoryProvisional

    _CRPFactory.bytecode = linkBytecode(_CRPFactory.bytecode, {
        "RightsManager" : RightsManagerAddress,
        "SmartPoolManager" : SmartPoolManagerAddress,
        "BalancerSafeMath" : BalancerSafeMathAddress
    })

    const CRPFactoryAddress = await deploy(_CRPFactory, signers[0], [])
    console.log('CRPFactory deployed to: ', CRPFactoryAddress)
}

main()