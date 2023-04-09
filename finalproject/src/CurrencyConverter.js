import React, { useState } from "react";
import "./App.css";
import { currencies } from "./Currencies";
import "bootstrap/dist/css/bootstrap.css";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState();

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handletoCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConvert = () => {
    fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`,
      {
        headers: {
          "X-RapidAPI-Key":"d3c8616885msh9c54fad803fa9e7p1c0505jsnb8b477c93b2e",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setConversionRate(data))
      .then((error) => console.error(error));
  };

  return (
    <div className="App">

      <h2>Currency Converter</h2>

      <label htmlFor="from-currency">From: </label>
      <select id="from-currency" 
              value={fromCurrency} 
              onChange={handleFromCurrencyChange}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

      <br />

      <label htmlFor="to-currency">To: </label>
      <select id="to-currency" 
              value={toCurrency} 
              onChange={handletoCurrencyChange}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

      <br />

      <label htmlFor="amount">Amount: </label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <br />

      <button onClick={handleConvert}>Convert!</button>

      <br />

      <div>Conversion Rate: {conversionRate*amount}</div>

    </div>
  );
}