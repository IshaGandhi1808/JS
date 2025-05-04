const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for (let select of dropdowns) {    
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if ( select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }else if ( select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("click", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    const currCode = element.value;
    const countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    // console.log(countryCode);
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

const updateExchangeRate = async () => {
    let amount = document.querySelector("#amount ");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 0) {
        amtVal === 0;
        amount.value = "0";
    }
    // console.log(amtVal);

    console.log(fromCurrency.value.toLowerCase(), toCurrency.value.toLowerCase());

    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`; 
    let reponse = await fetch(URL);
    let data = await reponse.json();

    // + rate = json[fromCurrency][toCurrency]
    let rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});