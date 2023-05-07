// add the game address here and update the contract name if necessary
const gameAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const contractName = "Game2";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const setXTx = await game.setX(10);
  await setXTx.wait();

  const setXTy = await game.setY(40);
  await setXTy.wait();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const winTx = await game.win();
  const receipt = await winTx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
