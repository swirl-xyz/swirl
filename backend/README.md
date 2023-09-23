## Run the code

- You need to setup a `.env` file with the network variables to be used in hardhat.config

### Install

```shell
npm install
```

### Compile

```shell
npx hardhat compile
```

### Test

```shell
npx hardhat test
```

### Deploy

#### Deploy Contracts for the GitfCard Approach

```shell
npx hardhat run --network testnet_aurora scripts/deployProject.js
```

#### Deploy Contracts for the GitfCardExtended Approach

```shell
npx hardhat run --network testnet_aurora ./scripts/deployProjectExtended.js
```
