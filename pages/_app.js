import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"; 
import { hardhat } from "wagmi/chains";

export const amoyChain = {
  id: 80002, // Replace with your Amoy chain ID
  name: 'Amoy',
  network: 'amoy',
  nativeCurrency: {
    name: 'Amoy Token',
    symbol: 'AMY',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://rpc-amoy.polygon.technology/', // Replace with your Amoy RPC URL
  },
  blockExplorers: {
    default: { name: 'Amoy Explorer', url: 'https://explorer.amoy.network' }, // Replace with your block explorer URL
  },
  testnet: true,
};

const { chains, provider, } = configureChains(
    
   /* [chain.hardhat],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id === hardhat.id) {
            return { http: 'http://127.0.0.1:8545/' } // Replace with your Hardhat node RPC URL
          }
          return null;
        },
        priority: 1,
      }),
    ]*/

    [amoyChain],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== amoyChain.id) return null;
          return { http: chain.rpcUrls.default };
        },
      }),
    ]

)
    

const { connectors } = getDefaultWallets({
  appName: "Custome Dex",
  chains,
});



const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp( { Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}



export default MyApp
