 import { ethers } from 'ethers';
 import CustomDexABI from "../utils/CustomDex.json";
 import CustomTokenABI from "../utils/CustomToken.json";

 export const tokenContract = async(address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if (ethereum) {
        const signer = provider.getSigner();
        console.log(address);
        const contractReader = new ethers.Contract(
            
            address,
            CustomTokenABI.abi,
            signer
        );

        return contractReader;
    }
 };

 export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;
    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            "0x67010166e0c89ce6B83645210335c3313391aE7C",
            CustomDexABI.abi,
            signer
        );

       
        return contractReader;
    }
 };  