async function connect() {
  if (typeof window.ethereum != "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Metamask present!");
    document.getElementById("connect-btn").innerHTML = "Connected to Metamask!";
  } else {
    console.log("Metamask is not installed.");
    document.getElementById("connect-btn").innerHTML =
      "Metamask is not installed.";
  }
}
