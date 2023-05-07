// add the game address here and update the contract name if necessary
const gameAddr = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
const contractName = "Game3";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const winTx = await game.win(45);
  const receipt = await winTx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
