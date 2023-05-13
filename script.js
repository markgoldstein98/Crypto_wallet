const API_KEY = "090d863f-b62e-41f4-9347-ff4a11ed909c";
const root = document.querySelector("#root");
const CRYPTO_SYMBOL = "BTC";

/* const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?symbol=${CRYPTO_SYMBOL}&CMC_PRO_API_KEY=${API_KEY}`; */

async function getFetch(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
}
/* console.log(getFetch()); */

async function log() {
  console.log(
    await getFetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`
    )
  );
}
log();

/* function getCoin() {
  let a = async function () {
    let data = await getFetch(apiUrl);
  };
}
 */