import React, { useState } from "react";
import "./App.css";
import { CurrencyContainer } from "./components/CurrencyContainer/CurrencyContainer";
import { convertCurrency } from "./service";

function App() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [currencyFromType, setCurrencyFromType] = useState("");
  const [currencyToType, setCurrencyToType] = useState("");

  const getCurrencyRate = (amt, to, from) => {
    if (fromAmount === "") {
      return setErrorMessage("Please enter the Input Amount");
    } else if (currencyFromType === "" || currencyToType === "") {
      return setErrorMessage("Please select the Currency Type");
    } else if (currencyFromType === currencyToType) {
      return setErrorMessage("Please select the Different Currency Type");
    }

    setErrorMessage("");
    convertCurrency(amt, to, from)
      .then((data) => {
        console.log(data);
        setToAmount(data.rates[currencyToType]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="container">
        <CurrencyContainer
          type="Input Amount"
          setAmount={setFromAmount}
          amount={fromAmount}
          setCurrencyType={setCurrencyFromType}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getCurrencyRate(fromAmount, currencyFromType, currencyToType);
          }}
        >
          Convert
        </button>
        <CurrencyContainer
          type="Output Amount"
          setAmount={setToAmount}
          amount={toAmount}
          setCurrencyType={setCurrencyToType}
        />
      </div>
      <div>
        <h1 className="text-center">{errorMessage}</h1>
      </div>
    </div>
  );
}

export default App;
