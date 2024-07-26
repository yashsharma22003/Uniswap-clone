import React, {useEffect, useState, useRef} from "react";

import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

import {ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, {Toaster} from "react-hot-toast";

import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";


const SingleCard = ({index, name, walletAddress}) => {

  const [balance ,setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();

  const[copyIcon, setCopyIcon] = useState({icon: ClipboardIcon});
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, {duration: 6000});
  const notifySuccess = () => toast.success("Transaction completed");

  useEffect(()=>{
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  },[name, walletAddress]);

  async function fetchTokenBalance() {
    
    const bal = await getTokenBalance(name, walletAddress);
    const fBal = ethers.utils.formatUnits(bal.toString(), 18);
    
    setBalance(fBal.toString());
  }

  async function fetchTokenAddress(){
    const address = await getTokenAddress(name);


    setTokenAddress(address);
  }
  return(
    <article className="  flex flex-col bg-[#212329]">
      <a rel="noopener noreferrer"
      href="#"
      aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
        alt=""
        className="object-cover w-full h-62 bg-gray-500"
        src={`img/${index + 1}.png`}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
        rel="noopener noreferrer"
        href="#"
        className="text-xs tracki uppercase hover:underline tex-[#7765F3]"
        >
          {name} 10 M Supply
        </a>

        <h3 className="flex-1 py-2 text-lg font-semibold leadi">
          Get {name} token, limited supply available
        </h3>

        <div className="flex mx-2 pt-[10px]">
          <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
            <p className="text-sm">{name}</p>
            <p className="pb-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>

          <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
            <copyIcon.icon
            className="h-6 cursor-pointer"
            onClick={()=>{
              navigator.clipboard.writeText(tokenAddress);
              setCopyIcon({icon: ClipboardCheckIcon});
            }}      
            />
          </div>
        </div>

      </div>
    </article>
  );
};

export default SingleCard;
