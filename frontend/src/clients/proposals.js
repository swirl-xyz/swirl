const ENS_NAME = 'swirl-goerli-1.eth';
const BASE_URL = 'https://testnet.snapshot.org/graphql';

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
}

export default new ProposalsClient();
