import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

// Identifiers
const connectBtn = document.getElementById("connect-btn");
const fundBtn = document.getElementById("fund-btn");

console.log(ethers);

// Functions
async function connect() {
  if (typeof window.ethereum != "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Metamask present!");
    connectBtn.innerHTML = "Connected to Metamask!";
  } else {
    console.log("Metamask is not installed.");
    connectBtn.innerHTML = "Metamask is not installed.";
  }
}

async function fund(ethAmount) {
  console.log(`Funding ${ethAmount} ETH.`);
  if (typeof window.ethereum != "undefined") {
    console.log("Adding funds.");
  }
}

// Events
connectBtn.onclick = connect;
fundBtn.onclick = fund;
