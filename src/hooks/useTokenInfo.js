/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAddress } from "./web3Context";
import { getTokenContract, multicall } from "../utils/contracts";
import MultiCallABI from "../abis/MultiCallABI.json";
import { BUYBACK_ADDR, MULTICALL_ADDR, WPT_ADDR } from "../abis/address";
import axios from "axios";

const defaultVal = {
  zenaPrice: 0,
  gdtPrice: 0,
};

export const TokenInfoContext = React.createContext(defaultVal);

export default function useTokenInfo() {
  return React.useContext(TokenInfoContext);
}
let timerid = null,
  dataid = null,
  priceid = null;

const apiKeyList = [
  "77d80f7e-0d2b-42cd-9f63-a7d4f71a859e",
  "4b70f4d7-6eb9-4137-95ce-669c8c62a1a6",
  "653af6ae-de63-4c57-afae-102fa235f270",
  "ee4b00b7-82a3-4455-8686-bb37f06c3f09",
  "b31ca43f-19b9-4e8a-a8ea-4631a5c5d00e",
  "ebfc5d08-7624-477f-be26-38f16aedd021",
  "8e4bde20-fa5d-420c-99c7-f9889609b7a9",
  "7d9b1d81-0df1-415b-be2c-6711818beb8a",
  "f76f0be5-e1de-48c1-83cc-fa2e1e1d03e0",
  "9e6e259c-dbd5-4fe9-9cfd-42437b9ef77b",
];

export function TokenInfoProvider({ children }) {
  const [gdtPrice, setGDTPrice] = useState(0);
  const [zenaPrice, setZENAPrice] = useState(0);

  async function fetchPrice() {
    try {
    } catch (error) {}
  }

  // useEffect(() => {
  //   fetchPrice();
  //   if (priceid) clearInterval(priceid);
  //   priceid = setInterval(() => {
  //     fetchPrice();
  //   }, 60000);
  // }, []);

  return (
    <TokenInfoContext.Provider
      value={{
        zenaPrice,
        gdtPrice,
      }}
      children={children}
    />
  );
}
