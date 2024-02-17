// All countries
const url = "https://flagsapi.com/:country_code/flat/50.png";
const countries = [
  { country: "United States", countryCode: "US", currencyCode: "USD" },
  { country: "United Kingdom", countryCode: "GB", currencyCode: "GBP" },
  { country: "Canada", countryCode: "CA", currencyCode: "CAD" },
  { country: "Australia", countryCode: "AU", currencyCode: "AUD" },
  { country: "France", countryCode: "FR", currencyCode: "EUR" },
  { country: "Italy", countryCode: "IT", currencyCode: "EUR" },
  { country: "Spain", countryCode: "ES", currencyCode: "EUR" },
  { country: "Japan", countryCode: "JP", currencyCode: "JPY" },
  { country: "China", countryCode: "CN", currencyCode: "CNY" },
  { country: "India", countryCode: "IN", currencyCode: "INR" },
  { country: "Brazil", countryCode: "BR", currencyCode: "BRL" },
  { country: "Russia", countryCode: "RU", currencyCode: "RUB" },
  { country: "South Korea", countryCode: "KR", currencyCode: "KRW" },
  { country: "Mexico", countryCode: "MX", currencyCode: "MXN" },
  { country: "South Africa", countryCode: "ZA", currencyCode: "ZAR" },
  { country: "Saudi Arabia", countryCode: "SA", currencyCode: "SAR" },
  { country: "United Arab Emirates", countryCode: "AE", currencyCode: "AED" },
  { country: "Singapore", countryCode: "SG", currencyCode: "SGD" },
  { country: "Switzerland", countryCode: "CH", currencyCode: "CHF" },
];

let drop = document.querySelectorAll(".cur-btn select");
for (let select of drop) {
  for (let x of countries) {
    let option = document.createElement("option");
    option.value = x.country;
    option.textContent = x.currencyCode + " - " + x.country;
    select.append(option);
  }
}
// Changing the Flag
let value = document.querySelector("#cur1");
value.addEventListener("change", (e) => {
  document.querySelector(".result").textContent = "";
  let curCode = e.target.value;
  console.log(curCode);
  for (let i = 0; i < countries.length; i++) {
    let code = countries[i].country;
    if (code === curCode) {
      let imgelement = document.querySelector(" .first");
      imgelement.src =
        "https://flagsapi.com/" + countries[i].countryCode + "/shiny/64.png";
    }
  }
});
let value2 = document.querySelector("#cur2");
value2.addEventListener("change", (e) => {
  document.querySelector(".result").textContent = "";
  let curCode = e.target.value;
  console.log(curCode);
  for (let i = 0; i < countries.length; i++) {
    let code = countries[i].country;
    if (code === curCode) {
      let imgelement = document.querySelector(" .second");
      imgelement.src =
        "https://flagsapi.com/" + countries[i].countryCode + "/shiny/64.png";
    }
  }
});

var Base_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const btn = document.querySelector(".convert");
btn.addEventListener("click", async () => {
  let data = document.querySelector("input").value;
  // console.log("hello World;");
  console.log(data);
  if (data == "" || data < 0) {
    data = 1;
    document.querySelector("input").value = data;
  }
  // for first choice
  let x1 = document.querySelector(" #cur1").value;
  console.log(x1);
  let x1c;
  for (let j = 0; j < countries.length; j++) {
    if (countries[j].country === x1) {
      x1c = countries[j].currencyCode;
    }
  }
  x1c = x1c.toLowerCase();
  console.log(x1c);
  // For second choice
  let x2 = document.querySelector(" #cur2").value;
  console.log(x2);
  let x2c;
  for (let j = 0; j < countries.length; j++) {
    if (countries[j].country === x2) {
      x2c = countries[j].currencyCode;
    }
  }
  x2c = x2c.toLowerCase();
  console.log(x2c);
  // // Making API call to get the conversion rates
  const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${x1c}/${x2c}.json`;
  let response = await fetch(URL);
  let curr = await response.json();
  let rate = curr[x2c];
  console.log(rate);
  let result = data * rate;
  document.querySelector(".result").textContent = result.toFixed(3);
});
