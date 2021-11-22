const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Reentrancy Guard", "Optimistic Prime", "Devcon Deva"],       // Names
    ["https://i.imgur.com/hcjzJlS.jpeg", // Images
    "https://i.imgur.com/LANuDHg.jpeg", 
    "https://i.imgur.com/QHROqrw.jpeg"],
    [400, 250, 150],                    // HP values
    [50, 100, 200]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
