
async function main() {
  const KeyPurchaser = await ethers.getContractFactory("KeyPurchaser");
  const keyPurchaser = await KeyPurchaser.deploy();
  await keyPurchaser.deployed();
  console.log("Key purchaser contract deployed at:", keyPurchaser.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});