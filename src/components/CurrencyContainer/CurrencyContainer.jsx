import React from "react";
import { CURRENCY_TYPE } from "../../constants";

import "./CurrencyContainer.css";

export const CurrencyContainer = ({
  type,
  setAmount,
  setCurrencyType,
  amount,
}) => {
  return (
    <div className="currency-container">
      <h4>{type}</h4>
      <input
        type="number"
        value={amount}
        placeholder="0"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select name="" onChange={(e) => setCurrencyType(e.target.value)}>
        {CURRENCY_TYPE.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
