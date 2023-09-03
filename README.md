# Ronin P2P Swap

Swap NFTs, token, anything you like with your peers.

## Introduction

1. Two users enter to a chat room.

  - There must be a button to create a room.
  - The new room must generate an invite link (only the one with the link can join) - can have password
  - There must be a chat UI in the room
  - There must be a UI showing the assets of both parties. They can be either tokens or NFTs (They can be NFTs and tokens at the same time).
  - Assets must be represented by an image and its name. 
  - Chat must show the connected ronin wallets of each party.

## Swap

2. The first step is to have a conversation (if needed) and the users will be able to select NFTs/token and amounts depending on the funds they have in their wallets.
3. Once they are selected they need to be shown to each party with a flag stating that they haven't been approved
4. each party must approve the swap of their assets.
5. Once both parties have approved there assets (blockchain tx), a new button will show up as "Confirm", only when two parties confirm the swap with a signature the smart contract will swap the assets.

Considerations:

- The swap can be canceled only before pressing the confirm button