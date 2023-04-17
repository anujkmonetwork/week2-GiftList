const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkleRoot = new MerkleTree(niceList);
  console.log(merkleRoot.getRoot());
  const name = "Anuj Kumar";
  const proof = merkleRoot.getProof(niceList.indexOf(name));
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: name,
    proof
  });

  console.log({ gift });
}

main();