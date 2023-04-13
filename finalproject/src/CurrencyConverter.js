import React, { useState } from "react";
import { currencies } from "./Currencies";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

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
          "X-RapidAPI-Key": "d3c8616885msh9c54fad803fa9e7p1c0505jsnb8b477c93b2e",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setConversionRate(data))
      .then((error) => console.error(error));
  };

  return (
    <div className="currencyBlock">

            <h2 className="currencyTitle">Currency Converter</h2>
            <Form>
              <Form.Label>From:</Form.Label>
              <Form.Select id="from-currency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}>
                {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}  
              </Form.Select>
            
            {/* <label htmlFor="from-currency">From: </label>
            <select id="from-currency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select> */}
            <br />
            <Form.Label>To: </Form.Label>
            <Form.Select id="to-currency"
              value={toCurrency}
              onChange={handletoCurrencyChange}>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}  
            </Form.Select>

            {/* <label htmlFor="to-currency">To: </label>
            <select id="to-currency"
              value={toCurrency}
              onChange={handletoCurrencyChange}>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select> */}

            <br />
            {/* <InputGroup htmlFor="amount" className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}>.00</InputGroup.Text>
            </InputGroup> */}
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <br />
            </Form>
            <Button 
              onClick={handleConvert} 
              variant="light"
              className="button">Convert</Button>    
            <br />

            <div>Conversion Rate: {conversionRate * amount}</div>

    </div>
  );
}