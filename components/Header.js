import React, {useEffect, useState} from "react";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, {Toaster} from "react-hot-toast";

//INTERNAL IMPORT
import {Menu, Logo, TokenBalance} from "./index";

const Header =() => {
  const [tokenBalComp,setTokenBalComp] = useState();
  const {address} = useAccount();

  const notifyConnectWallet = () =>
    toast.error("Connect wallet.", {duration:2000});

  useEffect(()=>{
    setTokenBalComp(
      <>
       <TokenBalance name={"SHIBA INU"} walletAddress={address}/>
      <TokenBalance name={"USD Coin"} walletAddress={address}/>
      <TokenBalance name={"BNB"} walletAddress={address}/>
      </>
    );

    if(!address) notifyConnectWallet();
  }, [address]);

  return(
    <header className="p-4 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <a
          rel="noopener noreferrer"
          href="#"
          aria-label="back to homepage"
          className="flex items-center p-2"
          >
            <Logo/>
          </a>

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
              rel="noopener noreferrer"
              href="/"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765F3]"
              >
                Swap
              </a>
            </li>

            <li className="flex">
            <a
            rel="noopener noreferrer"
            href="/tokens"
            className="flex items-center px-4 -mb-1 dark:border-transparent"
              >
            
              Tokens
            </a>
            </li>

            <li className="flex">

            <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-4 -mb-1 dark:border-transparent"
            >
              NFTs
            </a>

            </li>

            <li className="flex">

            <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-4 -mb-1 dark:border-transparent"
            >
              Pool
            </a>
            </li>

          </ul>

        </div>

          <div className="items-center flex-shrink-0 hidden lg:flex">

      <TokenBalance name={"USD Coin"} walletAddress={address}/>
      <TokenBalance name={"SHIBA INU"} walletAddress={address}/>
      <TokenBalance name={"BNB"} walletAddress={address}/> 
        <ConnectButton/>
          </div>

          <button className="p-4 lg:hidden">
            <Menu />
          </button>

      </div>
      <Toaster />
    </header>
  );

};

export default Header;
