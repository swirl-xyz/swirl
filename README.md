# SWIRL

A novel approach to P2P funding for de-centralized science using ERC-6551.

<img width="1174" height="624" alt="Screenshot 2025-08-24 at 7 35 33 PM" src="https://github.com/user-attachments/assets/71bb1779-3829-4f90-8436-a5cc9b81e440" />

Watch the demo [here](https://ethglobal.com/showcase/swirl-78tgy)

## DESCRIPTION

We leveraged ERC-6551 to introduce accountability between research groups and donors of research projects. Research groups use our app to create a shared Safe that holds the funds for their research project. When a Safe is created, an NFT is issued to represent ownership of it. Donors can send donations to the research group's safe, and research groups can transfer ownership of the Safe by sending their NFT to another entity.

Since the Safe is guarded, when the research group wants to withdraw funds, they must issue a withdrawal proposal instead. This triggers a simple-majority voting round in which all donors are invited to apply due diligence and review the reasons for the application of funds. Donors may decide to vote in favour of the withdrawal request, or they may vote against it. All voting is accomplished on-chain using Uma's oSnap protocol.

A research group can also propose to transfer ownership of the safe to another entity, together with all of it's funds. When a Safe is created, we mint an NFT with a wallet. This wallet is used as a signature to sign transactions on the research group's Safe. If there is a vote of no confidence in the project, the research group can trade the NFT to another entity. In the event of a transfer, the transaction history and genealogy of the project is preserved clearly on-chain increasing audibility.

## HOW ITS MADE

We used Gnosis Safe to create a research group's account. Donors send money to this wallet. Safe's guard functionality allows us to program the smart contract wallet to prevent direct withdrawals from the externally-owned account that created it. Instead, withdrawals must occur as the outcome of a voting round.

We used Uma's oSnap protocol to provide on-chain voting for withdrawal requests and project transfer requests. Uma makes it easy to issue votes and also for donors to dispute the result of any voting outcome within a set liveness period. Our frontend uses the Snapshot SDK to issue new proposals, and for donors to explictily cast a vote.

We used Unlock to issue NFTs to donors when they send funds to the research group's Safe. This NFT represents their right to be invited to any voting rounds. Whenever a new voting round is created, we query Unlock's subgraph protocol to find all prospective voters using these soul-bound NFTs.

We used the ERC-6551 protocol to mint a custom NFT which is used to sign transactions in the research group's Safe. This NFT is transferrable, thus opening up the prospect of 'NFT owned Safes.'

Finally, we used Privy to simplify the login process UX on the application itself. Research scientists should be spending their time researching, not figuring how to setup wallets!

We used Hardhat to develop and deploy our smart contracts and NextJS to build the frontend. A lot of coffee was consumed in the process.
