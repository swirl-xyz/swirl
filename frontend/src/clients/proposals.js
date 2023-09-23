import snapshot from '@snapshot-labs/snapshot.js';

const hub = 'https://testnet.snapshot.org'; // main net: https://testnet.snapshot.org
const snapshotClient = new snapshot.Client712(hub);

const BASE_URL = 'https://testnet.snapshot.org/graphql';
const SNAPSHOT_SPACE = 'swirl-goerli-1.eth';
const SNAPSHOT_APP = 'swirl-goerli-1';

class ProposalsClient {
  async list() {
    const result = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `query { 
          proposals (
            first: 200, 
            where: {
              space_in: ["${ENS_NAME}"]
            }) { 
              id 
              created 
              space { id } 
            } 
          }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

    return result;
  }

  async get(proposalId) {
    const result = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `query Proposal($id: String!) {
          proposal(id: $id) {
            id
            ipfs
            title
            body
            discussion
            choices
            start
            end
            snapshot
            state
            author
            created
            plugins
            network
            type
            quorum
            symbol
            privacy
            validation {
              name
              params
            }
            strategies {
              name
              network
              params
            }
            space {
              id
              name
            }
            scores_state
            scores
            scores_by_strategy
            scores_total
            votes
            flagged
          }
        }`,
        variables: {
          id: proposalId,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

    return result;
  }

  create() {}

  async vote({
    web3Provider, userWalletAddress, proposalId, choiceId,
  }) {
    try {
      const result = await snapshotClient.vote(
        web3Provider,
        userWalletAddress,
        {
          space: SNAPSHOT_SPACE,
          proposal: proposalId,
          type: 'single-choice',
          choice: choiceId,
          reason: 'PLACEHOLDER REASON',
          app: SNAPSHOT_APP,
        },
      );

      return result;
    } catch (error) {
      console.error('[Client: Proposals]', error);

      return error;
    }
  }
}

export default new ProposalsClient();
