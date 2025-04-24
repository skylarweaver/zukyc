# Sample FrogPods for Testing

These sample FrogPods can be used for testing the verification system. They are properly signed and can be used as test data.

## Purple Fluorescent Frog

```json
{
  "entries": {
    "beauty": 6,
    "biome": 1,
    "description": "The purple fluorescent frog, found in parts of India, is a remarkable species with its striking violet hue and the ability to fluoresce under ultraviolet light. This adaptation, believed to play a role in mating rituals and communication, sets it apart in the world of amphibians.",
    "frogId": 1,
    "imageUrl": "https://api.zupass.org/frogcrypto/images/b5af0796-c038-4f47-9aa2-1cff2b005ad7",
    "intelligence": 5,
    "jump": 4,
    "name": "Purple Fluorescent Frog",
    "owner": {
      "cryptographic": "0xc694293616d6dd6c252844edc4fb88f72e7eb35c403f92990801494427abdf2"
    },
    "ownerPubKey": {
      "eddsa_pubkey": "54Y+Oqy/zYHMWpgO4pH6HXKc4xN44u+SvbKZEYK89xs"
    },
    "pod_type": "frogcrypto.frog",
    "rarity": 1,
    "speed": 6,
    "temperament": 4,
    "timestampSigned": 1745521377320
  },
  "signature": "BmkZ9fUVzDOLzxP5MdJd6J//cc87a98w96jnKVwcighAc5sczIH8QbYH9Wtqu0/bLldQfErxamCBl2wtFUW9BA",
  "signerPublicKey": "4sGycsjU8rG8FzKyvZd9h9632oR0qhs6DoNk4YTkHSE"
}
```

## Mahogany Tree Frog

```json
{
  "entries": {
    "beauty": 0,
    "biome": 1,
    "description": "The mahogany tree frog, a small amphibian species native to Central and South America, is known for its rich mahogany brown coloration and distinctive markings. These frogs are often found in the lush rainforests, where they use their colors and patterns to blend seamlessly into their surroundings.",
    "frogId": 11,
    "imageUrl": "https://api.zupass.org/frogcrypto/images/ead39a52-68e6-4bd8-9fd1-62499ade08e2",
    "intelligence": 4,
    "jump": 5,
    "name": "Mahogany Tree Frog",
    "owner": {
      "cryptographic": "0xc694293616d6dd6c252844edc4fb88f72e7eb35c403f92990801494427abdf2"
    },
    "ownerPubKey": {
      "eddsa_pubkey": "54Y+Oqy/zYHMWpgO4pH6HXKc4xN44u+SvbKZEYK89xs"
    },
    "pod_type": "frogcrypto.frog",
    "rarity": 1,
    "speed": 3,
    "temperament": 3,
    "timestampSigned": 1745521390866
  },
  "signature": "2l4dny7MH8AX8L3sH6bd9s9A0PFlC0a/czdicSTkQiS6XgPdpDdehzMETfC71QnHlX9OTLgHOR3Q6f5pInI1AQ",
  "signerPublicKey": "4sGycsjU8rG8FzKyvZd9h9632oR0qhs6DoNk4YTkHSE"
}
```

## Signer Information

To use these FrogPods in your testing environment, set this public key in your environment variables:

```
NEXT_PUBLIC_FROG_EDDSA_PUBLIC_KEY=4sGycsjU8rG8FzKyvZd9h9632oR0qhs6DoNk4YTkHSE
```

### Verification Details

- EDDSA Public Key: `4sGycsjU8rG8FzKyvZd9h9632oR0qhs6DoNk4YTkHSE`
- Example Signature: `2l4dny7MH8AX8L3sH6bd9s9A0PFlC0a/czdicSTkQiS6XgPdpDdehzMETfC71QnHlX9OTLgHOR3Q6f5pInI1AQ`

## Semaphore Identity

For testing with the GPC proof system (hardcoded into useIdentity.ts), you can use this dummy Semaphore V3 identity exported from Zupass:

```json
["0xdbe55f6e7bb7805325ca30edbbe9576c730f1bcd80e91e11cb37ec1f457ac0","0xbc380b7452d293c89944564a6509632d8585dd3f14579c4c56b68b8c9dbb48"]
```

This identity can be used as the owner identity when generating proofs with the above FrogPods.

### Usage Notes

1. Add the EDDSA public key to your environment variables
2. Use these PODs as test data in your verification system
3. Notice that the Purple Fluorescent Frog has a speed of 6 while the Mahogany Tree Frog has a speed of 3 