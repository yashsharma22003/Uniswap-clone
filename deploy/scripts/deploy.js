const hre = require("hardhat");

async function main(){
    const CustomDex = await hre.ethers.getContractFactory("CustomDex");
    const customDex = await CustomDex.deploy();

    await customDex.deployed();
    console.log(`Custom Dex: ${customDex.address}` );
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});