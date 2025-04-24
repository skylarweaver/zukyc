import { useEffect, useState } from "react";
import { Identity } from "@semaphore-protocol/identity";
import { beBigIntToBuffer } from "@zk-kit/utils";
import { sha256 } from "js-sha256";

export function v3tov4Identity(v3Identity: string): Identity {
  const v3IDComponents: string[] = JSON.parse(v3Identity);
  if (
    !v3IDComponents ||
    !Array.isArray(v3IDComponents) ||
    v3IDComponents.length !== 2 ||
    v3IDComponents[0] === undefined ||
    v3IDComponents[1] === undefined
  ) {
    throw new Error(`Malformed v3 Identity ${v3Identity}`);
  }
  const hashInput = Buffer.from(
    beBigIntToBuffer(BigInt(v3IDComponents[1]), 32).toString("hex") +
      beBigIntToBuffer(BigInt(v3IDComponents[0]), 32).toString("hex"),
    "hex"
  );
  // this private key needs to be 32 bytes to be compatible with POD
  const privKey = Buffer.from(sha256(hashInput), "hex");
  return new Identity(privKey);
}

const useIdentity = () => {
  const [identity, setIdentity] = useState<Identity>();

  useEffect(() => {
    const privatekey = localStorage.getItem("semaphorePrivateKey");
    if (privatekey) {
      setIdentity(Identity.import(privatekey));
    } else {
      // generate new identity
      // technically you would never want to publish this, but this is a dummy acco
      const id = v3tov4Identity('["0xdbe55f6e7bb7805325ca30edbbe9576c730f1bcd80e91e11cb37ec1f457ac0","0xbc380b7452d293c89944564a6509632d8585dd3f14579c4c56b68b8c9dbb48"]');
      setIdentity(id);
      localStorage.setItem("semaphorePrivateKey", id.export());
    }
  }, []);

  return identity;
};

export default useIdentity;
